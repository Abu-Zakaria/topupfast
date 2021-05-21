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

				        <div class="mb-2 text-right">
				        	<button class="btn btn-sm btn-primary" @click="openModal()">Add New</button>
				        </div>

						<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Product Id" :value="searchfrom.product_id" @input="check($event.target.value)">

				        <table class="table table-bordered table-sm table-condensed">
				            <thead>
				            <tr>
				                <th>ID</th>
				                <th>Product</th>
				                <th>Name</th>
				                <th>Amount</th>
				                <th>Extra fee</th>
				                <th>Action</th>
				            </tr>
				            </thead>
				            <tr v-for="(row , index) in package.data" :key="index">
				                <td>{{ index+1 }}</td>
				                <td>{{ row.product_id }}</td>
				                <td>{{ row.name }}</td>
				                <td>{{ row.amount }}</td>
				                <td>{{ row.extra_fee }}</td>
				                <td width="200">
				                    <button @click="edit(row)" class="btn btn-sm btn-primary">Edit</button>
				                    <button @click="deleteRow(row)" class="btn btn-sm btn-danger">Del</button>
				                </td>
				            </tr>
				        </table>

				        <pagination :links="package.links"></pagination>

				        <div class="modal fade" id="modal">
				            <div class="modal-dialog">

				                <div class="modal-content">
				                    <div class="modal-header">
				                        <h4 class="modal-title">New Contact</h4>
				                    </div>
				                    <div class="modal-body">

				                        <div class="form-group">
				                            <label for="name"><b>Name</b></label>
				                            <input class="form-control"  :class="[errors.name ? 'is-invalid' : '']" required id="name" placeholder="Name" v-model="form.name"/>
				                             <span
						                          v-if="errors.name"
						                          class="invalid-feedback"
						                          role="alert"
						                        >
						                          <strong>{{ errors.name[0] }}</strong>
						                        </span>
				                        </div>

				                        <div class="form-group">
				                        	<label for="name"><b>Product</b></label>
				                            <select v-model="form.product_id" :error="errors.brand_id" class="form-control">
									            <option :value="null" />
									            <option v-for="row in product" :value="row.id">{{ row.name }}</option>
									        </select>
				                        </div>


				                        <div class="form-group">
				                            <label for="name"><b>amount</b></label>
				                            <input class="form-control"  :class="[errors.amount ? 'is-invalid' : '']" required id="name" placeholder="amount" v-model="form.amount"/>
				                             <span
						                          v-if="errors.amount"
						                          class="invalid-feedback"
						                          role="alert"
						                        >
						                          <strong>{{ errors.amount[0] }}</strong>
						                        </span>
				                        </div>

				                        <div class="form-group">
				                            <label for="name"><b>extra_fee</b></label>
				                            <input class="form-control"  :class="[errors.extra_fee ? 'is-invalid' : '']" required id="name" placeholder="extra_fee" v-model="form.extra_fee"/>
				                             <span
						                          v-if="errors.extra_fee"
						                          class="invalid-feedback"
						                          role="alert"
						                        >
						                          <strong>{{ errors.extra_fee[0] }}</strong>
						                        </span>
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
		name: "Package",
		components: {Layout,Pagination},
		props: {
	      	msg: String,
	      	product: Array,
	      	package: Object,
	      	success: String,
	      	errors: Object,
			filters: Object,
	    },
        data() {
            return {
                editMode: false,
                form: {
                    name: null,
                    product_id: null,
                    amount: null,
                    extra_fee: null,
                },
                searchfrom: {
					product_id: this.filters.product_id,
					number  : this.filters.number,
				},
            }
        },
        watch: {
			searchfrom: {
				handler: throttle(function() {
					let query = pickBy(this.searchfrom)
					console.log(this.searchfrom)
					this.$inertia.replace(this.route('package.index', Object.keys(query).length ? query : { remember: 'forget' }))
				}, 150),
				deep: true,
			},
		},
        methods: {
        	check(a){
				this.searchfrom.product_id=a
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
                    name: null,
                    product_id: null,
                    amount: null,
                    extra_fee: null,
                }
            },
            save: function (data) {
                this.$inertia.post('/package', data)
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
                if (!confirm('Sure')) return;
                data._method = 'PUT';
                this.$inertia.post('/package/' + data.id, data)
                this.reset();
                this.closeModal();
            },
            deleteRow: function (data) {
                if (!confirm('Sure')) return;
                data._method = 'DELETE';
                this.$inertia.post('/package/' + data.id, data)
                this.reset();
                this.closeModal();
            }
        }
    }
</script>

<style>
</style>
