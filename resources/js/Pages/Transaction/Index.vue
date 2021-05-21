<template>
<layout name="Brand">
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
							<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="User Id" :value="searchfrom.user_id" @input="check($event.target.value)">
							<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Number" :value="searchfrom.number" @input="searchemail($event.target.value)">
							<inertia-link href="/canclealltransaction" class="btn btn-success">Cancle</inertia-link>
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
					                <td>{{ row.status }}</td>
									<td>{{ row.created_at }}</td>
					                <td width="200">
					                    <button @click="edit(row)" v-if="row.status=='pending'" class="btn btn-sm btn-primary">Edit</button>
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
			amount:Number
	    },
        data() {
            return {
                editMode: false,
                form: {
                    status: null,
                    id: null,
                },
                searchfrom: {
					user_id: this.filters.user_id,
					number  : this.filters.number,
				},
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
