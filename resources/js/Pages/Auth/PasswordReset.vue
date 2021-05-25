<template>
		<auth-layout>
			<section class="row flexbox-container">
				<div class="col-xl-7 col-10 d-flex justify-content-center">
					<div class="card bg-authentication rounded-0 mb-0 w-100">
						<div class="row m-0">
							<div class="col-lg-6 d-lg-block d-none text-center align-self-center p-0">
								<img src="/images/pages/reset-password.png" alt="branding logo">
							</div>
							<div class="col-lg-6 col-12 p-0">
								<div class="card rounded-0 mb-0 px-2">
									<div class="card-header pb-1">
										<div class="card-title">
											<h4 class="mb-0">Reset Password</h4>
										</div>
									</div>
									<p class="px-2">Please enter your new password.</p>
									<div class="card-content">
										<div class="card-body pt-1">
											<form @submit.prevent="resetPassword">
												<fieldset class="form-label-group">
													<input type="email"
																 class="form-control"
																 v-model="email"
																 placeholder="Email"
																 autocomplete="email" autofocus>
													<label>Email</label>
												</fieldset>

												<fieldset class="form-label-group">
													<input type="password"
																 class="form-control"
																 :class="[errors.password ? 'is-invalid' : '']"
																 v-model="form.password"
																 placeholder="Password"
																 autocomplete="new-password">
													<label>Password</label>
													<span v-if="errors.password" class="invalid-feedback" role="alert">
															<strong>{{ errors.password }}</strong>
													</span>
												</fieldset>

												<fieldset class="form-label-group">
													<input type="password"
																 class="form-control"
																 v-model="form.password_confirmation"
																 placeholder="Confirm Password"
																 autocomplete="new-password">
													<label>Confirm Password</label>
												</fieldset>
												<div class="row pt-2">
													<div class="col-12 col-md-6 mb-1">
														<inertia-link :href="route('login')" class="btn btn-outline-primary btn-block px-0">Go Back to Login</inertia-link>
													</div>
													<div class="col-12 col-md-6 mb-1">
														<button type="submit" class="btn btn-primary btn-block px-0">Reset</button>
													</div>
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
				name: "PasswordReset",
				components: {AuthLayout},
				props: {
					token: String,
					email: String,
					errors: Object
				},
				data: function () {
						return {
							form: {
								password: '',
								password_confirmation: ''
							}
						}
				},
				methods: {
					resetPassword: function () {
						this.$inertia.post(this.route('passwordrecet'), {
							email: this.email,
							password: this.form.password,
							password_confirmation: this.form.password_confirmation,
							token: this.token
						});
					}
				}
		}
</script>

<style>

</style>
