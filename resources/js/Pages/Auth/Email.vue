<template>
		<auth-layout>
			<section class="row flexbox-container">
				<div class="col-xl-7 col-md-9 col-10 d-flex justify-content-center px-0">
					<div class="card bg-authentication rounded-0 mb-0">
						<div class="row m-0">
							<div class="col-lg-6 d-lg-block d-none text-center align-self-center">
								<img src="/images/pages/forgot-password.png" alt="branding logo">
							</div>
							<div class="col-lg-6 col-12 p-0">
								<div class="card rounded-0 mb-0 px-2 py-1">
									<div class="card-header pb-1">
										<div class="card-title">
											<h4 class="mb-0">Recover your password</h4>
										</div>
									</div>
									<p class="px-2 mb-0">Please enter your email address and we'll send you instructions on how to reset your password.</p>
									<div class="card-content">
										<div class="card-body">
											<div v-if="success" class="alert alert-success" role="alert">
												{{ success }}
											</div>

											<form @submit.prevent="sendEmail">
												<div class="form-label-group">
													<input type="email"
																 class="form-control"
																 :class="[errors.email ? 'is-invalid' : '']"
																 v-model="email"
																 placeholder="Email"
																 autocomplete="email" autofocus>

													<label>Email</label>

													<span v-if="errors.email" class="invalid-feedback" role="alert">
															<strong>{{ errors.email[0] }}</strong>
													</span>
												</div>

												<div class="float-md-left d-block mb-1">
													<inertia-link :href="route('login')" class="btn btn-outline-primary btn-block px-75">Back to Login</inertia-link>
												</div>
												<div class="float-md-right d-block mb-1">
													<button type="submit" class="btn btn-primary btn-block px-75">Recover Password</button>
												</div>
											</form>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</auth-layout>
</template>

<script>
		import AuthLayout from "../../Shared/AuthLayout";
		export default {
				name: "Email",
				components: {AuthLayout},
				props: {
					errors: Object,
					success: String
				},
				data: function () {
					return {
						email: ''
					}
				},
			methods: {
				sendEmail: function () {
					this.$inertia.post(this.route('password.email'), {
						email: this.email
					});
				}
			}
		}
</script>

<style>

</style>
