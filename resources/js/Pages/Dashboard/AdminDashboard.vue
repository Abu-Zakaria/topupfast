<template>
	<layout name="AdminDashboard">
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
									<h1 class="mb-2 text-white">{{ __('Congratulations') }} {{ auth.name }},</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	</layout>
</template>

<script>
		import Layout from "../../Shared/Layout";
		import DataTable from "../../Components/DataTable";
		export default {
				name: "AdminDashboard",
				components: {DataTable, Layout},
				props: {
					msg: String,
					auth: Object
				},
				data: function () {
					return {
					}
				},
			methods: {
			},
			created() {
					console.log(this.__('Congratulations'))
			}
		}
</script>

<style>

</style>
