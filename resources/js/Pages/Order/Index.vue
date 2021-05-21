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
				        <div class="mb-6 d-flex justify-between items-center">
							<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Order Id" :value="searchfrom.order_id" @input="searchemail($event.target.value)">
							<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="User Id" :value="searchfrom.user_id" @input="check($event.target.value)">
							<div class="px-2">
								<date-picker v-model="searchfrom.start_date" :config="options" placeholder="Start Date" style="padding: 25px;"></date-picker>
							</div>
							<div class="px-2">
								<date-picker v-model="searchfrom.end_date" :config="options" placeholder="End Date" style="padding: 25px;"></date-picker>
							</div>
							<select v-model="searchfrom.status" class="mt-1 w-full form-select form-control" style="padding: 20px;margin-bottom: -10px;width: 140px">
						        <option :value="null" />
						        <option value="pending">pending</option>
					          	<option value="complete">complete</option>
					          	<option value="cancel">cancel</option>
					        </select>
						</div>
						
						<div class="table-responsive">
					        <table class="table table-bordered responsive table-sm table-condensed">
					            <thead>
					            <tr>
					                <th>ID</th>
					                <th style="width: 440px;">Package</th>
					                <th>User </th>
					                <th>Buy Price</th>
					                <th>Sale Price</th>
					                <th>Player id</th>
					                <th>Password</th>
					                <th>Accounttype</th>
					                <th>Security Code</th>
					                <th>Status</th>
					                <th>Date</th>
					                <th>Action</th>
					            </tr>
					            </thead>
					            <tr v-for="(row , index) in orders.data" :key="index">
					                <td>{{ row.id }}</td>
					                <td width="7%">{{ row.package_name }} ( <span v-if="row.package"> {{ row.package.product_id }}</span> )</td>
					                <td width="20%">{{ row.user_id }} (<span v-if="row.user"> {{ row.user.phone }} </span>)</td>
					                <td>{{ row.buy_price }}</td>
					                <td>{{ row.sale_price }}</td>
					                <td>{{ row.playerid }}</td>
					                <td>{{ row.password }}</td>
					                <td>{{ row.accounttype }}</td>
					                <td>{{ row.securitycode }}</td>
					                <td>{{ row.created_at }}</td>
					                <td>{{ row.status }}</td>
					                <td width="200">
					                    <button @click="edit(row)" v-if="row.status=='pending'" class="btn btn-sm btn-primary">Edit</button>
					                </td>
					            </tr>
					            <tr>
					            	<td colspan="3">Total</td>
					            	<td > {{ parseFloat(totalbuy).toFixed(2) }}</td>
					            	<td > {{ parseFloat(totalsale).toFixed(2) }}</td>
					            	<td > {{ parseFloat(totalsale-totalbuy).toFixed(2) }}</td>
					            </tr>
					        </table>
				        </div>

				        <pagination :links="orders.links"></pagination>

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
	      	orders: Object,
	      	success: String,
	     	errors: Object,
			filters: Object,
			totalbuy: Number,
			totalsale: Number,
	    },
        data() {
            return {
                editMode: false,
                form: {
                    status:null,
                    id:null,
                    start_date: new Date(),
                    end_date: new Date(),
                },
                searchfrom: {
					user_id: this.filters.user_id,
					order_id  : this.filters.order_id,
					start_date  : this.filters.start_date,
					end_date  : this.filters.end_date,
					status  : this.filters.status,
				},
		        options: {
		          format: 'DD/MM/YYYY',
		          useCurrent: false,
		        }  
            }
        },
        watch: {
			searchfrom: {
				handler: throttle(function() {
					let query = pickBy(this.searchfrom)
					console.log(this.searchfrom)
					this.$inertia.replace(this.route('order.index', Object.keys(query).length ? query : { remember: 'forget' }))
				}, 150),
				deep: true,
			},
		},
        methods: {
        	check(a){
				this.searchfrom.user_id=a
			},
			searchemail(a){
				this.searchfrom.order_id=a
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
                  	status:'',
                    id:null,
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
                this.$inertia.post('/order/' + data.id, data)
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
