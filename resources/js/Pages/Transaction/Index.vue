<template>
<layout name="Transaction">
	<section class="users-list-wrapper">
  		<div id="basic-examples">
			<div class="card">
				<div class="card-content">
					<div class="card-body">

						<div v-if="success" class="alert alert-success">
							{{ success }}
						</div>

				        <div class="mb-2 text-right d-none">
				        	<button class="btn btn-sm btn-primary" @click="openModal()">Add New</button>
				        </div>

				         <div class="mb-6 flex justify-between items-center">
                    <input class="relative w-full py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="User Id" :value="searchfrom.user_id" @input="check($event.target.value)">
                    <input class="relative w-full py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Number" :value="searchfrom.number" @input="searchemail($event.target.value)">
                   <div style="width: 15%;float: right;">
                     <inertia-link href="/canclealltransaction" class="btn btn-success">Cancle</inertia-link>
                   </div>
                   <div style="width: 15%;float: right;">
                     <select v-model="searchfrom.status" class="relative w-full rounded-r" style="padding: 10px;margin-bottom: -10px;width: 140px">
                       <option :value="null" />
                       <option value="pending">pending</option>
                       <option value="complete">complete</option>
                       <option value="cancel">cancel</option>
                     </select>
                   </div>
                   <div style="width: 15%;float: right;margin-right: 4px;" class="relative w-full rounded-r">
                     <date-picker v-model="searchfrom.end_date" :config="options" placeholder="End Date" style="padding: 22px;"></date-picker>
                   </div>
                   <div style="width: 15%;float: right;margin-right: 4px;" class="relative w-full rounded-r">
                     <date-picker v-model="searchfrom.start_date" :config="options" placeholder="Start Date" style="padding: 22px;"></date-picker>
                   </div>
                </div>

				       	<div class="table-responsive">
					        <table class="table table-bordered responsive table-sm table-condensed">
					            <tr>
					                <th>Name</th>
					                <th>User id</th>
					                <th>purpose</th>
					                <th>Amount</th>
					                <th>Number</th>
					                <th>Paymentmethod</th>
					                <td>Comment</td>
					                <th>Status</th>
													<th>Created At</th>
					                <th>Action</th>
					            </tr>
					            <tr v-for="(row , index) in transaction.data" :key="index">
					                <td>{{ row.id }}</td>
					                <td>{{ row.user_id }}</td>
					                <td>{{ row.purpose }}</td>
					                <td>{{ row.amount }}</td>
					                <td>{{ row.number }}</td>
					                <td>{{ row.paymentmethod.name }}</td>
					                <td :title="row.comment">
					                	{{ (row.comment) ? row.comment.substr(0, 6) : "" }}{{ (row.comment && row.comment.length > 6) ? "..." : "" }}
					                </td>
					                <td>{{ row.status }}</td>
													<td>{{ row.created_at }}</td>
					                <td width="200">
					                    <button @click="edit(row)" v-if="row.status=='pending'" class="btn btn-sm btn-primary">Edit</button>
					                    <p v-else>{{ getStatusVerb(row) }} by {{ row.accept_by ? (row.accept_by.id == $page.auth.id ? "you" : row.accept_by.name) : "N/A" }}</p>
					                    <button @click="deleteRow(row)" class="btn btn-sm btn-danger d-none">Del</button>
					                </td>
					            </tr>
					            <tr>
					            	<td colspan="3">Total</td>
					            	<td >{{ amount }}</td>
					            </tr>
					        </table>
				        </div>

				        <pagination :links="transaction.links"></pagination>

				        <div class="modal fade" id="modal">
				            <div class="modal-dialog">

				                <div class="modal-content">
				                    <div class="modal-header">
				                        <h4 class="modal-title">New Contact</h4>
				                    </div>
				                    <div class="modal-body">
				                        <div class="form-group">
				                        	<input type="hidden" v-model="form.id">
				                        	<label for="name"><b>Status</b></label>
				                            <select v-model="form.status" :error="errors.status" class="form-control">
													            <option value="pending">pending</option>
													            <option value="complete">complete</option>
													            <option value="cancel">cancel</option>
													        </select>
				                        </div>
				                        <div class="form-group">
				                        	<label><b>Comment</b></label>
				                        	<input type="text" v-model="form.comment" class="form-control" :error="errors.comment">
				                        </div>
				                    </div>
				                    <div class="modal-footer">
				                        <button type="button" class="btn btn-default" @click="closeModal()">Close</button>
				                        <button type="submit" class="btn btn-primary" v-show="!editMode" @click="save(form)">Save
				                        </button>
				                        <button type="submit" class="btn btn-primary" v-show="editMode" @click="update(form)">Update
				                        </button>
				                    </div>
				                </div><!-- /.modal-content -->

				            </div><!-- /.modal-dialog -->
				        </div><!-- /.modal -->

				    </div>
				</div>
			</div>
		</div>
    </section>
</layout>
</template>

<script>
	import Layout from "../../Shared/Layout";
	import Pagination from './../../Shared/Pagination';
	import pickBy from 'lodash/pickBy'
	import throttle from 'lodash/throttle'
	import mapValues from 'lodash/mapValues'
	export default {
		name: "Product",
		components: {Layout,Pagination},
		props: {
        msg: String,
        transaction: Object,
        success: String,
        errors: Object,
        filters: Object,
        amount: String,
	    },
      data() {
            return {
                editMode: false,
                form: {
                		comment: '',
                    status: null,
                    id: null,
                    start_date: new Date(),
                    end_date: new Date(),
                },
                searchfrom: {
                  user_id: this.filters.user_id,
                  number  : this.filters.number,
                  start_date  : this.filters.start_date,
                  end_date  : this.filters.end_date,
                  status  : this.filters.status,
                },
                options: {
                  format: 'DD/MM/YYYY',
                  useCurrent: false,
                },
                hidden_transaction_accept: [],
            }
        },
        watch: {
          searchfrom: {
            handler: throttle(function() {
                  let query = pickBy(this.searchfrom)
                  console.log(this.searchfrom)
                  this.$inertia.replace(this.route('transaction.index', Object.keys(query).length ? query : { remember: 'forget' }))
                }, 150),
                deep: true,
            },
        },
        methods: {
        	getStatusVerb(data)
        	{
        		if(data.status == 'pending')
        		{
        			return 'Accepted';
        		}
        		else if(data.status == 'complete')
        		{
        			return 'Completed';
        		}
        		else if(data.status == 'cancel')
        		{
        			return 'Canceled';
        		}
        	},
        	is_admin()
        	{
        		return this.$page.auth.is_admin == 1
        	},
        	is_seller()
        	{
        		return this.$page.auth.is_admin == 2
        	},
        	check(a){
            this.searchfrom.user_id=a
          },
          searchemail(a){
            this.searchfrom.number=a
          },
          openModal: function () {
              $('#modal').modal('show')
          },
          closeModal: function () {
              $('#modal').modal('hide')
              this.reset();
              this.editMode=false;
          },
          reset: function () {
              this.form = {
                  status: null,
                  id: null,
              }
          },
          save: function (data) {
              this.$inertia.post('/product', data)
              this.reset();
              this.closeModal();
              this.editMode = false;
          },
          edit: function (data) {
              this.form = Object.assign({}, data);
              this.editMode = true;
              this.openModal();
          },
          update: function (data) {
              data._method = 'PUT';
              this.$inertia.post('/transaction/' + data.id, data)
              this.reset();
              this.closeModal();
          },
          deleteRow: function (data) {
              if (!confirm('Sure')) return;
              data._method = 'DELETE';
              this.$inertia.post('/product/' + data.id, data)
              this.reset();
              this.closeModal();
          }
        }
    }
</script>

<style>
</style>
