<template>
	<layout name="Dashboard">
		<section id="dashboard-analytics">
			<div class="row">
				<div class="col-lg-6 col-md-12 col-sm-12">
					<div class="card bg-analytics text-white">
						<div class="card-content">
							<div class="card-body text-center">
								<img src="/images/elements/decore-left.png" class="img-left" alt="card-img-left">
								<img src="/images/elements/decore-right.png" class="img-right" alt="card-img-right">
								<div class="avatar avatar-xl bg-primary shadow mt-0">
									<div class="avatar-content">
										<i class="feather icon-award white font-large-1"></i>
									</div>
								</div>
								<div class="text-center">
									<h1 class="mb-2 text-white">{{ __('Congratulations') }} {{ $page.auth.name }},</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12" v-if="$page.auth.is_admin == 1">
					<div class="card">
						<div class="card-header d-flex flex-column align-items-start pb-0">
							<div class="avatar bg-rgba-primary p-50 m-0">
								<div class="avatar-content">
									<i class="feather icon-users text-primary font-medium-5"></i>
								</div>
							</div>
							<h2 class="text-bold-700 mt-1 mb-25">{{ users }}</h2>
							<p class="mb-0">Users Gained</p>
						</div>
						<div class="card-content">
							<div id="subscribe-gain-chart"></div>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12" v-if="$page.auth.is_admin == 1">
					<div class="card">
						<div class="card-header d-flex flex-column align-items-start pb-0">
							<div class="avatar bg-rgba-primary p-50 m-0">
								<div class="avatar-content">
									<i class="feather icon-users text-primary font-medium-5"></i>
								</div>
							</div>
							<h2 class="text-bold-700 mt-1 mb-25">{{ usertoday }}</h2>
							<p class="mb-0">Users Today</p>
						</div>
						<div class="card-content">
							<div id="subscribe-gain-chart"></div>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12" v-if="$page.auth.is_admin == 1">
					<div class="card">
						<div class="card-header d-flex flex-column align-items-start pb-0">
							<div class="avatar bg-rgba-primary p-50 m-0">
								<div class="avatar-content">
									<i class="feather icon-users text-primary font-medium-5"></i>
								</div>
							</div>
							<h2 class="text-bold-700 mt-1 mb-25">{{ ordertoday }}</h2>
							<p class="mb-0">Today Orders</p>
						</div>
						<div class="card-content">
							<div id="subscribe-gain-chart"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 col-12">
					<div class="card">
						<div class="card-header d-flex flex-column align-items-start pb-0">
							<div class="avatar bg-rgba-primary p-50 m-0">
								<div class="avatar-content">
									<i class="feather icon-users text-primary font-medium-5"></i>
								</div>
							</div>
							<h2 class="text-bold-700 mt-1 mb-25">{{ seller_wallet }}</h2>
							<p class="mb-0"><span v-if="$page.auth.is_admin == 2">Seller</span> Wallet</p>
						</div>
						<div class="card-content">
							<div id="subscribe-gain-chart"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 col-12" v-if="$page.auth.is_admin == 2">
					<div class="card">
						<div class="card-header d-flex flex-column align-items-start pb-0">
							<div class="avatar bg-rgba-primary p-50 m-0">
								<div class="avatar-content">
									<i class="feather icon-users text-primary font-medium-5"></i>
								</div>
							</div>
							<h2 class="text-bold-700 mt-1 mb-25">{{ withdraw_amount }}</h2>
							<p class="mb-0">Withdraw Amount</p>
						</div>
						<div class="card-content">
							<div id="subscribe-gain-chart"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 col-12" v-if="$page.auth.is_admin == 1">
					<div class="card">
						<div class="card-header d-flex flex-column align-items-start pb-0">
							<div class="avatar bg-rgba-warning p-50 m-0">
								<div class="avatar-content">
									<i class="feather icon-package text-warning font-medium-5"></i>
								</div>
							</div>
							<h2 class="text-bold-700 mt-1 mb-25">{{ orders }}</h2>
							<p class="mb-0">Orders Received</p>
						</div>
						<div class="card-content">
							<div id="orders-received-chart"></div>
						</div>
					</div>
				</div>
			</div>

			<div v-if="success" class="alert alert-success">
				{{ success }}
			</div>
			<div v-if="error" class="alert alert-danger">
				{{ error }}
			</div>

			<div class="row">
				<div class="col-12">
					<div class="card">

						<div class="card-header">
							<h4 class="mb-0"><span v-if="is_seller()">Global </span>Orders</h4>
						</div>

						<div class="card-content">
							<div class="table-responsive">
						        <table class="table table-bordered responsive table-sm table-condensed">
						            <thead>
						            <tr>
						                <th>ID</th>
						                <th>Package</th>
						                <th>User </th>
						                <th>Sale Price</th>
						                <th>Buy Price</th>
						                <th>Player id</th>
						                <th>Password</th>
						                <th>Accounttype</th>
						                <th>Security Code</th>
						                <th>Status</th>
						                <th>Action</th>
						            </tr>
						            </thead>
						            <tr v-for="(row , index) in tenorder" :key="index">
						                <td>{{ row.id }}</td>
						                <td>{{ row.package_name }}</td>
						                <td>{{ row.user_id }}</td>
						                <td>{{ row.sale_price }}</td>
						                <td>{{ row.buy_price }}</td>
						                <td>{{ row.playerid }}</td>
						                <td>{{ row.password }}</td>
						                <td>{{ row.accounttype }}</td>
						                <td>{{ row.securitycode }}</td>
						                <td>{{ row.status }}</td>
						                <td width="200" v-if="((isOrderAccepted(row) && row.accept_id == $page.auth.id) || (!isOrderAccepted(row) && $page.auth.is_admin == 1)) && row.status =='pending'">
						                    <button @click="edit(row)" v-if="" class="btn btn-sm btn-primary">Edit</button>
						                </td>
						                <td width="200" v-else-if="showAcceptButton(row)">
						                    <button @click="accept(row, this)" class="btn btn-sm btn-primary">Accept</button>
						                </td>
						                <td width="200" v-else-if="isOrderAccepted(row)">
						                	<span v-if="row.accept_id != 0 && row.accept_id != $page.auth.id">
						                		{{ getStatusVerb(row) }} by {{ (row.accept_by) ? row.accept_by.name : '' }}
						                	</span>
						                	<span v-if="(row.accept_id == $page.auth.id && row.status != 'pending')">
						                		{{ getStatusVerb(row) }} by you
						                	</span>
						                </td>
						                <!-- for admin's actions -->
						                <td width="200" v-else-if="row.accept_id == 0 && row.status != 'pending' && $page.auth.is_admin == 1">
						                	{{ getStatusVerb(row) }} by you
						                </td>
						                <td width="200" v-else-if="row.status != 'pending'">
						                	{{ getStatusVerb(row) }} by admin
						                </td>
						            </tr>
						        </table>
					        </div>
						</div>

					</div>
				</div>
			</div>


			<div class="row">
				<div class="col-12">
					<div class="card">

						<div class="card-header">
							<h4 class="mb-0">Transaction</h4>
						</div>

						<div class="card-content">
							<div class="table-responsive">
						        <table class="table table-bordered responsive table-sm table-condensed">
					           		<thead>
						            <tr>
						                <th>Name</th>
						                <th>User id</th>
						                <th>purpose</th>
						                <th>Amount</th>
						                <th>Number</th>
						                <th>Paymentmethod</th>
						                <th>Comment</th>
						                <th>Status</th>
										<th>Created At</th>
						                <th>Action</th>
						            </tr>
						            </thead>
						            <tr v-for="(row , index) in tenwallet" :key="index">
						                <td>{{ index+1 }}</td>
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
						                    <p v-else>{{ getStatusVerb(row) }} by {{ row.accept_by.id == $page.auth.id ? "you" : row.accept_by.name }}</p>
						                    <button @click="deleteRow(row)" class="btn btn-sm btn-danger d-none">Del</button>
						                </td>
							        </tr>
						        </table>
					        </div>
						</div>

					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<div class="card">

						<div class="card-header">
							<h4 class="mb-0">Invoice</h4>
						</div>

						<div class="card-content">
							<div class="table-responsive">
						        <table class="table table-bordered responsive table-sm table-condensed">
					           		<tr>
						                <th>ID</th>
						                <th>Product</th>
						                <th>User </th>
						                <th>Price</th>
						                <th>Details</th>
						                <th>Status</th>
						            </tr>
						            </thead>
						            <tr v-for="(row , index) in invoice" :key="index">
						                <td>{{ row.id }}</td>
						                <td>{{ row.product_id }}</td>
						                <td>{{ row.user_id }}</td>
						                <td>{{ row.price }}</td>
						                <td>{{ row.details }}</td>
						                <td>{{ row.status }}</td>
						            </tr>
						        </table>
					        </div>
						</div>

					</div>
				</div>
			</div>


			<div class="modal fade" id="modal">
	            <div class="modal-dialog">

	                <div class="modal-content">
	                    <div class="modal-header">
	                        <h4 class="modal-title">New Contact</h4>
	                    </div>
	                    <div class="modal-body">
	                        <div class="form-group">
	                        	<label for="name"><b>Status</b></label>
	                            <select v-model="form.status" class="form-control">
						            <option value="pending">pending</option>
						            <option value="complete">complete</option>
						            <option value="cancel">cancel</option>
						        </select>
	                        </div>
	                        <div class="form-group">
	                        	<label><b>Comment</b></label>
	                        	<input type="text" v-model="form.comment" class="form-control">
	                        </div>
	                    </div>
	                    <div class="modal-footer">
	                        <button type="button" class="btn btn-default" @click="closeModal()">Close</button>
	                        <button type="submit" class="btn btn-primary" v-if="form.paymentmethod" @click="updatetransaction(form)">Save
	                        </button>
	                        <button type="submit" class="btn btn-primary" v-else="editMode" @click="update(form)">Update
	                        </button>
	                    </div>
	                </div><!-- /.modal-content -->

	            </div><!-- /.modal-dialog -->
	        </div><!-- /.modal -->

		</section>
	</layout>
</template>

<script>
	import Layout from "../Shared/Layout";
	export default {
		name: "Dashboard",
		components: {Layout},
		props: ['msg','users','orders','usertoday','ordertoday','wallet','tenorder','tenwallet','success','error','invoice', 'seller_wallet', 'withdraw_amount'],
		data() {
            return {
                editMode: true,
                form: {
                	comment: '',
                    status:'',
                    id:null,
                },
			    hidden_orders_accept: []
            }
        },
        methods: {
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
        	isOrderAccepted(order)
        	{
        		if(order.accept_id != 0)
        		{
        			return true;
        		}
        		return false;
        	},
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
        	accept(order)
        	{
        		this.hidden_orders_accept.push(order.id)
        		axios.post('seller/order/accept', order)
	            	.then(res => {
	            		if(res.data.success == true)
	            		{
	            			this.$toast(res.data.message)
	            			order.accept_id = this.$page.auth.id
	            		}
	            		else
	            		{
	            			this.$toast(res.data.message, 'error')
	            			let index = this.hidden_orders_accept.indexOf(order.id)
		          			this.hidden_orders_accept.splice(index, 1);
	            		}
	            	})
	            	.catch(error => {
	            		let index = this.hidden_orders_accept.indexOf(order.id)
		          		this.hidden_orders_accept.splice(index, 1);
	            		this.$toast("Something went wrong", 'error')
	            		console.error('>', error)
	            	})
        	},
        	is_admin()
        	{
        		return this.$page.auth.is_admin == 1;
        	},
        	is_seller()
        	{
        		return this.$page.auth.is_admin == 2;
        	},
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
            updatetransaction: function (data) {
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
