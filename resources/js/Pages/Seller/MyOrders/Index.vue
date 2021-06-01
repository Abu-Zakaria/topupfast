<template>
	<Layout name="My Orders">
		<section class="users-list-wrapper">
	  		<div id="basic-examples">
				<div class="card">
					<div class="card-content">
						<div class="card-body">

							<div v-if="success" class="alert alert-success">
								{{ success }}
							</div>
							<div class="mb-6 d-flex justify-between items-center">
			                  <input class="relative w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Order Id" :value="searchform.order_id" @input="searchemail($event.target.value)" style="width: 15%;margin-right: 3px;">
			                  <input class="relative w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="User Id" :value="searchform.user_id" @input="check($event.target.value)" style="width: 15%;margin-right: 3px;">
			                  <input class="relative w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Seller ID" :value="searchform.accept_id" @input="searchseller($event.target.value)" style="width: 15%;margin-right: 3px;">
			                  <input class="relative w-full rounded-r focus:shadow-outline" :value="searchform.product_id" @input="searchproduct($event.target.value)" autocomplete="off" type="text" placeholder="Product ID" style="width: 15%;margin-right: 3px;">
			                <div style="width: 15%;margin-right: 3px;">
			                  <date-picker v-model="searchform.start_date" :config="options" placeholder="Start Date" style="padding: 25px;"></date-picker>
			                </div>
			                <div style="width: 15%;margin-right: 3px;">
			                  <date-picker v-model="searchform.end_date" :config="options" placeholder="End Date" style="padding: 25px;"></date-picker>
			                </div>
			                <select v-model="searchform.status" class="w-full form-select form-control" style="padding: 25px;width: 15%;">
			                      <option :value="null" />
			                      <option value="pending">pending</option>
			                      <option value="complete">complete</option>
					          	<option value="cancel">cancel</option>
					        </select>
					        <select v-model="searchform.accounttype" class="w-full form-select form-control" style="padding: 25px;width: 15%;">
								<option :value="null" />
								<option value="gmail">Gmail</option>
								<option value="facebook">Facebook</option>
					        </select>
						</div>

							<div class="table-responsive">
						        <table class="table table-bordered responsive table-sm table-condensed">
						            <thead>
						            <tr>
						                <th>ID</th>
						                <th style="width: 440px;">Package</th>
						                <th>User </th>
						                <th v-if="$page.auth.is_admin == 1">Buy Price</th>
						                <th>Sale Price</th>
						                <th>Commission</th>
						                <th>Player id</th>
						                <th>Password</th>
						                <th>Accounttype</th>
						                <th>Security Code</th>
						                <th>Status</th>
						                <th>Date</th>
						            </tr>
						            </thead>
						            <tbody>
						            	<tr v-for="(row , index) in orders.data" :key="index">
							                <td>{{ row.id }}</td>
							                <td width="7%">{{ row.package_name }} ( <span v-if="row.package"> {{ row.package.product_id }}</span> )</td>
							                <td width="20%">{{ row.user_id }} (<span v-if="row.user"> {{ row.user.phone }} </span>)</td>
							                <td v-if="$page.auth.is_admin == 1">{{ row.buy_price }}</td>
							                <td>{{ row.sale_price }}</td>
							                <td>{{ row.seller_commission }}</td>
							                <td>{{ row.playerid }}</td>
							                <td>{{ row.password }}</td>
							                <td>{{ row.accounttype }}</td>
							                <td>{{ row.securitycode }}</td>
							                <td>{{ row.status }}</td>
							                <td>{{ row.created_at }}</td>
							            </tr>
							            <tr>
							            	<td colspan="3">Total</td>
							            	<td > {{ parseFloat(totalsale).toFixed(2) }}</td>
							            </tr>
						            </tbody>
						        </table>
						        <pagination :links="orders.links"></pagination>
					        </div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
	import Layout from "../../../Shared/Layout";
	import Pagination from '../../../Shared/Pagination';
	import pickBy from 'lodash/pickBy'
	import throttle from 'lodash/throttle'
	import mapValues from 'lodash/mapValues'

	export default {
		name: "MyOrders",
		components: {Layout, Pagination},
		props: {
	      	msg: String,
	      	orders: Object,
	      	success: String,
	     	errors: Object,
	     	filters: Object,
			totalsale: Number,
	    },
	    data()
	    {
	    	return {
	    		searchform: {
					user_id: this.filters.user_id,
					order_id  : this.filters.order_id,
					start_date  : this.filters.start_date,
					end_date  : this.filters.end_date,
					status  : this.filters.status,
					accounttype  : this.filters.accounttype,
					accept_id  : this.filters.accept_id,
					product_id  : this.filters.product_id,
				},
				options: {
					format: 'DD/MM/YYYY',
					useCurrent: false,
				},
	    	}
	    },
	    watch: {
	    	searchform: {
				handler: throttle(function() {
					let query = pickBy(this.searchform)
					console.log(this.searchform)
					this.$inertia.replace(this.route('seller.orders.index', Object.keys(query).length ? query : { remember: 'forget' }))
				}, 150),
				deep: true,
			}
	    },
	    methods: {
			check(a){
				this.searchform.user_id=a
			},
			searchemail(a){
				this.searchform.order_id=a
			},
			searchseller(a){
				this.searchform.accept_id=a
			},
			searchproduct(a){
				this.searchform.product_id=a
			},
	    }
	}
</script>