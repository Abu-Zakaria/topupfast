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
							<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Order Id" :value="searchfrom.order_id" @input="searchemail($event.target.value)">
							<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="User Id" :value="searchfrom.user_id" @input="check($event.target.value)">

							<select v-model="searchfrom.status" class="mt-1 w-full form-select form-control" style="padding: 20px;margin-bottom: -10px;width: 140px">
						        <option :value="null" />
						        <option value="pending">pending</option>
					          	<option value="complete">complete</option>
					          	<option value="cancel">cancel</option>
					        </select>
						</div>
				        <table class="table table-bordered table-sm table-condensed">
				            <thead>
				            <tr>
				                <th>ID</th>
				                <th>Product</th>
				                <th>User </th>
				                <th>Price</th>
				                <th>Details</th>
				                <th>Status</th>
				                <th>Action</th>
				            </tr>
				            </thead>
				            <tr v-for="(row , index) in invoice.data" :key="index">
				                <td>{{ row.id }}</td>
				                <td>{{ row.product.name }}</td>
				                <td>{{ row.user_id }}</td>
				                <td>{{ row.price }}</td>
				                <td>{{ row.details }}</td>
				                <td>{{ row.status }}</td>
				                <td width="200">
				                    <button @click="edit(row)" v-if="row.status=='pending'" class="btn btn-sm btn-primary">Edit</button>
				                </td>
				            </tr>
				        </table>

				        <pagination :links="invoice.links"></pagination>

				        <div class="modal fade" id="modal">
				            <div class="modal-dialog">

				                <div class="modal-content">
				                    <div class="modal-header">
				                        <h4 class="modal-title">Update</h4>
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
				                     <div class="modal-body">
				                        <div class="form-group">
				                        	<label for="name"><b>Details</b></label>
				                            <textarea class="form-control" name="" v-model="form.details" id="" cols="30" rows="10"></textarea>
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
	      	invoice: Object,
	      	success: String,
	     	errors: Object,
			filters: Object,
	    },
        data() {
            return {
                editMode: false,
                form: {
                    status:'',
                    details:'',
                    id:null,
                },
                searchfrom: {
					user_id: this.filters.user_id,
					order_id  : this.filters.order_id,
					status  : this.filters.status,
				},
            }
        },
        watch: {
			searchfrom: {
				handler: throttle(function() {
					let query = pickBy(this.searchfrom)
					this.$inertia.replace(this.route('invoice.index', Object.keys(query).length ? query : { remember: 'forget' }))
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
                  	details:'',
                    id:null,
                }
            },
            save: function (data) {
                this.$inertia.post('/invoice', data)
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
                this.$inertia.post('/invoice/' + data.id, data)
                this.reset();
                this.closeModal();
            },
            deleteRow: function (data) {
                if (!confirm('Sure')) return;
                data._method = 'DELETE';
                this.$inertia.post('/invoice/' + data.id, data)
                this.reset();
                this.closeModal();
            }
        }
    }
</script>

<style>
</style>
