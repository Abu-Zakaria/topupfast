<template>
	<Layout name="Withdraw">
		<section class="users-list-wrapper">
	  		<div id="basic-examples">
				<div class="card">
					<div class="card-content">
						<div class="card-body">

							<div v-if="success" class="alert alert-success">
								{{ success }}
							</div>
							<div v-if="error" class="alert alert-warning">
								{{ error }}
							</div>
							<div class="mb-6 flex justify-between items-center" v-if="is_admin()">
								<input class="relative w-full px-2 py-1 mb-2 rounded-r focus:shadow-outline" autocomplete="off"
									type="text" placeholder="User name" :value="searchform.user"
									@input="searchUser($event.target.value)">
							</div>
							<div class="mb-2 text-right" v-if="is_seller()">
					        	<button class="btn btn-sm btn-primary" @click="openModal()">Create request</button>
					        </div>

					        <div class="table-responsive">
						        <table class="table table-bordered responsive table-sm table-condensed">
						            <thead>
							            <tr>
							            	<th>ID</th>
							            	<th v-if="is_admin()">Requested by</th>
							            	<th>Withdraw amount</th>
							            	<th>Status</th>
							            	<th>Requested at</th>
							            	<th v-if="is_admin()">Action</th>
							            </tr>
							        </thead>

							        <tbody>
							        	<tr v-for="request in requests.data">
							        		<td>{{ request.id }}</td>
							        		<td v-if="is_admin()">{{ request.user.name }}</td>
							        		<td>{{ request.withdraw_amount }}</td>
							        		<td>{{ request.status }}</td>
							        		<td>{{ request.created_at }}</td>
							        		<td v-if="is_admin()">
							        			<span v-if="request.status == 'pending'">
								        			<button @click="approve(request)" class="btn btn-sm btn-success">
								        				Approve
								        			</button>
								                    <button @click="decline(request)" class="btn btn-sm btn-danger">
								                    	Decline
								                    </button>
							        			</span>
							        		</td>
							        	</tr>
							        </tbody>
							    </table>
							    <pagination :links="requests.links"></pagination>
							</div>

							<div class="modal fade" id="modal">
					            <div class="modal-dialog">
					                <div class="modal-content">
					                    <div class="modal-header">
					                        <h4 class="modal-title">New Withdraw Request</h4>
					                    </div>
					                    <div class="modal-body">
					                        <div class="form-group">
					                        	<input type="hidden" v-model="form.id">
					                        	<label for="name"><b>Amount</b></label>
					                        	<input type="number" v-model="form.amount" :error="errors.amount" class="form-control" :max="wallet_balance" min="0" />
					                        	<p v-if="form_amount_error" class="text-danger font-weight-bold">{{ form_amount_error }}</p>
					                        </div>
					                    </div>
					                    <div class="modal-footer">
					                        <button type="button" class="btn btn-default" @click="closeModal()">Close</button>
					                        <button type="submit" class="btn btn-primary" @click="submitRequest(form)">
					                        	Submit Request
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
	</Layout>
</template>

<script>
	import Layout from "../../Shared/Layout";
	import Pagination from './../../Shared/Pagination';
	import pickBy from 'lodash/pickBy'
	import throttle from 'lodash/throttle'

	export default {
		name: "WithdrawRequest",
		components: {Layout, Pagination},
		props: {
	      	msg: String,
	      	orders: Array,
	      	success: String,
	      	error: String,
	     	errors: Object,
	     	requests: Object,
	     	wallet_balance: Number
	    },
	    data()
	    {
	    	return {
	    		form_amount_error: '',
	    		form: {
	    			id: '',
	    			amount: ''
	    		},
	    		searchform: {
	    			user: ''
	    		}
	    	}
	    },
	    watch: {
	    	searchform: {
	    		handler: throttle(function() {
	    			let query = pickBy(this.searchform)
					console.log(this.searchform)
					this.$inertia.replace(this.route('withdraw_requests.index', Object.keys(query).length ? query : { remember: 'forget' }))
	    		}, 150),
	    		deep: true
	    	}
	    },
	    methods: {
	    	searchUser(name)
	    	{
	    		this.searchform.user = name
	    	},
	    	approve(request)
	    	{
	    		this.$inertia.put('/withdraw_requests/' + request.id, {
	    			status: 'approved'
	    		});
	    	},
	    	decline(request)
	    	{
	    		this.$inertia.put('/withdraw_requests/' + request.id, {
	    			status: 'cancel'
	    		});
	    	},
	    	is_admin()
	    	{
	    		return this.$page.auth.is_admin == 1
	    	},
	    	is_seller()
	    	{
	    		return this.$page.auth.is_admin == 2
	    	},
	    	submitRequest(form)
	    	{
	    		if(form.amount > this.wallet_balance)
	    		{
	    			this.form_amount_error = "Amount cannot be more than your wallet balance ("+ this.wallet_balance +")"
	    			return false;
	    		}
	    		else { this.form_amount_error = "" }

	    		this.$inertia.post('/withdraw_requests', form)
	    		this.reset();
	    		this.closeModal();
	    	},
	    	openModal()
	    	{
	    		$('#modal').modal('show')
	    	},
	    	closeModal: function () {
				$('#modal').modal('hide')
				this.reset();
			},
			reset()
			{
				this.form = {
					id: '',
					amount: ''
				}
			}
	    }
	}
</script>