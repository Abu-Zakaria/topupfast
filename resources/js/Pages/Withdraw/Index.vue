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
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
	import Layout from "../../Shared/Layout";

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