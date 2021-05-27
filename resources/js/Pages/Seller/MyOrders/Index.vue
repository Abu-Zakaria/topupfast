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
						            </tr>
						            </thead>
						            <tbody>
						            	<tr v-for="(row , index) in orders" :key="index">
							                <td>{{ row.id }}</td>
							                <td width="7%">{{ row.package_name }} ( <span v-if="row.package"> {{ row.package.product_id }}</span> )</td>
							                <td width="20%">{{ row.user_id }} (<span v-if="row.user"> {{ row.user.phone }} </span>)</td>
							                <td>{{ row.buy_price }}</td>
							                <td>{{ row.sale_price }}</td>
							                <td>{{ row.playerid }}</td>
							                <td>{{ row.password }}</td>
							                <td>{{ row.accounttype }}</td>
							                <td>{{ row.securitycode }}</td>
							                <td>{{ row.status }}</td>
							                <td>{{ row.created_at }}</td>
							            </tr>
						            </tbody>
						        </table>
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

	export default {
		name: "MyOrders",
		components: {Layout},
		props: {
	      	msg: String,
	      	orders: Array,
	      	success: String,
	     	errors: Object,
	    },
	    data()
	    {
	    	return {

	    	}
	    }
	}
</script>