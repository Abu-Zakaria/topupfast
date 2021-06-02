<template>
	<Layout name="WithdrawOrder">
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
					        <div class="table-responsive">
						        <table class="table table-bordered responsive table-sm table-condensed">
						            <thead>
							            <tr>
							            	<th>ID</th>
							            	<th>Seller</th>
							            	<th>Orders Wallet</th>
							            	<th>Withdraw commissions</th>
							            </tr>
							        </thead>

							        <tbody>
							        	<tr v-for="seller in sellers.data">
							        		<td>{{ seller.id }}</td>
							        		<td>{{ seller.name }}</td>
							        		<td>{{ seller.ordersWallet }}</td>
							        		<td>{{ seller.withdrawOrders }}</td>
							        	</tr>
							        </tbody>
							    </table>
							    <pagination :links="sellers.links"></pagination>
							</div>
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
		name: "SellersOrderCommission",
		components: {Layout, Pagination},
		props: {
	      	msg: String,
	      	sellers: Object,
	      	success: String,
	      	error: String,
	     	errors: Object,
	     	total_wallet_balance: Number
	    },
	    data()
	    {
	    	return {
	    	}
	    },
	    watch: {
	    	
	    },
	    methods: {
	    	
	    }
	}
</script>