<template>
<layout name="Order">
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
                  <input class="relative w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Order Id" :value="searchfrom.order_id" @input="searchemail($event.target.value)" style="width: 15%;margin-right: 3px;">
                  <input class="relative w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="User Id" :value="searchfrom.user_id" @input="check($event.target.value)" style="width: 15%;margin-right: 3px;">
                  <input class="relative w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Seller ID" :value="searchfrom.accept_id" @input="searchseller($event.target.value)" style="width: 15%;margin-right: 3px;">
                  <input class="relative w-full rounded-r focus:shadow-outline" :value="searchfrom.product_id" @input="searchproduct($event.target.value)" autocomplete="off" type="text" placeholder="Product Name" style="width: 15%;margin-right: 3px;">
                <div style="width: 15%;margin-right: 3px;">
                  <date-picker v-model="searchfrom.start_date" :config="options" placeholder="Start Date" style="padding: 25px;"></date-picker>
                </div>
                <div style="width: 15%;margin-right: 3px;">
                  <date-picker v-model="searchfrom.end_date" :config="options" placeholder="End Date" style="padding: 25px;"></date-picker>
                </div>
                <select v-model="searchfrom.status" class="w-full form-select form-control" style="padding: 25px;width: 15%;">
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
					                <td><span @click="copyClipboard(row.playerid)">{{ row.playerid }}</span></td>
					                <td @click="copyClipboard(row.password)">{{ row.password }}</td>
					                <td>{{ row.accounttype }}</td>
					                <td @click="copyClipboard(row.securitycode)">{{ row.securitycode }}</td>
					                <td>{{ row.status }}</td>
					                <td>{{ row.created_at }}</td>
					                <td width="200" v-if="((isOrderAccepted(row) && row.accept_id == $page.auth.id) || (!isOrderAccepted(row) && $page.auth.is_admin == 1)) && row.status =='pending'">
					                    <button @click="edit(row)" class="btn btn-sm btn-primary">Edit</button>
					                </td>
					                <td width="200" v-else-if="showAcceptButton(row)">
					                    <button @click="accept(row, this)" class="btn btn-sm btn-primary">Accept</button>
					                </td>
					                <td width="200" v-else-if="isOrderAccepted(row)">
					                	<span v-if="row.accept_id != 0 && row.accept_id != $page.auth.id">
					                		Accepted by {{ row.accept_by.name }}
					                	</span>
					                	<span v-if="(row.accept_id == $page.auth.id && row.status != 'pending')">Accepted by you</span>
					                </td>
					                <!-- for admin's actions -->
					                <td width="200" v-else-if="row.accept_id == 0 && row.status != 'pending' && $page.auth.is_admin == 1">
					                	Accepted by you
					                </td>
					                <td width="200" v-else-if="row.status != 'pending'">
					                	Accepted by admin
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
		name: "Order",
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
          accept_id  : this.filters.accept_id,
          product_id  : this.filters.product_id,
				},
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        },
		    hidden_orders_accept: []
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
        	copyClipboard(text)
        	{
        		console.log('text', text);
        		let el = document.createElement("textarea");
        		el.value = text;

        		el.setAttribute('readonly', '');
				el.style.position = 'absolute';
				el.style.left = '-9999px';
				document.body.appendChild(el);
				el.select();
				document.execCommand('copy');

				document.body.removeChild(el);
				this.$toast("Copied to clipboard!")
        	},
        	showAcceptButton(product)
        	{
        		if(this.$page.auth.is_admin == 2
        			&& !this.hidden_orders_accept.includes(product.id)
        			&& product.status=='pending'
        			&& product.accept_id == 0)
        		{
        			return true;
        		}
        		return false;
        	},
        	isOrderAccepted(product)
        	{
        		if(product.accept_id != 0)
        		{
        			return true;
        		}
        		return false;
        	},
        	check(a){
				this.searchfrom.user_id=a
			},
			searchemail(a){
				this.searchfrom.order_id=a
			},
			searchseller(a){
        this.searchfrom.accept_id=a
      },
      searchproduct(a){
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
            accept: function (data) {
            	this.hidden_orders_accept.push(data.id)
            	axios.post('seller/order/accept', data)
	            	.then(res => {
	            		if(res.data.success == true)
	            		{
	            			this.$toast(res.data.message)
	            			data.accept_id = this.$page.auth.id
	            		}
	            		else
	            		{
	            			this.$toast(res.data.message, 'error')
	            			let index = this.hidden_orders_accept.indexOf(data.id)
	            			this.hidden_orders_accept.splice(index, 1);
	            		}
	            	})
	            	.catch(error => {
	            		let index = this.hidden_orders_accept.indexOf(data.id)
	            		this.hidden_orders_accept.splice(index, 1);
	            		this.$toast("Something went wrong", 'error')
	            		console.error('>', error)
	            	})
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
</script>

<style>
</style>
