<template>
	<auth-layout>
		<section class="row flexbox-container">
			<div class="col-xl-8 col-10 d-flex justify-content-center">
				<div class="card bg-authentication rounded-0 mb-0">
					<div class="row m-0">
						<div
							class="col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0"
						>
							<img src="/images/pages/register.jpg" alt="branding logo" />
						</div>
						<div class="col-lg-6 col-12 p-0">
							<div class="card rounded-0 mb-0 p-2">
								<div class="card-header pt-50 pb-1">
									<div class="card-title">
										<h4 class="mb-0">Create Account</h4>
									</div>
								</div>
								<p class="px-2">Fill the below form to create a new account.</p>
								<div class="card-content">
									<div class="card-body pt-0">
										<form @submit.prevent="register">
											<div class="form-label-group">
												<input
													type="text"
													class="form-control"
													:class="[errors.name ? 'is-invalid' : '']"
													v-model="form.name"
													placeholder="Name"
													autocomplete="name"
													autofocus
												/>
												<label>Name</label>
												<span
													v-if="errors.name"
													class="invalid-feedback"
													role="alert"
												>
													<strong>{{ errors.name[0] }}</strong>
												</span>
											</div>
											<div class="form-label-group">
												<input
													type="text"
													class="form-control"
													:class="[errors.shop_name ? 'is-invalid' : '']"
													v-model="form.shop_name"
													placeholder="Shop Name"
													autocomplete="shop_name"
												/>
												<label>shop_name</label>
												<span
													v-if="errors.shop_name"
													class="invalid-feedback"
													role="alert"
												>
													<strong>{{ errors.shop_name[0] }}</strong>
												</span>
											</div>
											<div class="form-label-group">
												<input
													type="text"
													class="form-control"
													:class="[errors.phone ? 'is-invalid' : '']"
													v-model="form.phone"
													placeholder="Contact No."
													autocomplete="phone"
												/>
												<label>Contact No.</label>
												<span
													v-if="errors.phone"
													class="invalid-feedback"
													role="alert"
												>
													<strong>{{ errors.phone[0] }}</strong>
												</span>
											</div>
											<div class="form-label-group">
												<input
													type="email"
													class="form-control"
													:class="[errors.email ? 'is-invalid' : '']"
													v-model="form.email"
													placeholder="Email"
													autocomplete="email"
												/>
												<label>Email</label>
												<span
													v-if="errors.email"
													class="invalid-feedback"
													role="alert"
												>
													<strong>{{ errors.email[0] }}</strong>
												</span>
											</div>
											<div class="form-label-group">
												<input
													type="password"
													class="form-control"
													:class="[errors.password ? 'is-invalid' : '']"
													v-model="form.password"
													placeholder="Password"
													autocomplete="new-password"
												/>
												<label>Password</label>
												<span
													v-if="errors.password"
													class="invalid-feedback"
													role="alert"
												>
													<strong>{{ errors.password[0] }}</strong>
												</span>
											</div>
											<div class="form-label-group">
												<input
													type="password"
													class="form-control"
													v-model="form.password_confirmation"
													name="password_confirmation"
													placeholder="Confirm Password"
													autocomplete="new-password"
												/>
												<label>Confirm Password</label>
											</div>
											<div class="form-group row">
												<div class="col-12">
													<fieldset class="checkbox">
														<div class="vs-checkbox-con vs-checkbox-primary">
															<input type="checkbox" v-model="form.accepted" />
															<span class="vs-checkbox">
																<span class="vs-checkbox--check">
																	<i class="vs-icon feather icon-check"></i>
																</span>
															</span>
															<span class="">
																I accept the terms & conditions.</span
															>
														</div>
													</fieldset>
												</div>
											</div>
											<inertia-link
												href="/login"
												class="btn btn-outline-primary float-left btn-inline mb-50"
												>Login</inertia-link
											>
											<button
												type="submit"
												:class="[form.accepted ? '' : 'disabled']"
												class="btn btn-primary float-right btn-inline mb-50"
											>
												Register
											</button>
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
	name: "Register",
	components: { AuthLayout },
	props: {
		errors: Object,
	},
	data: function () {
		return {
			form: {
				name: "",
				shop_name: "",
				phone: "",
				email: "",
				password: "",
				password_confirmation: "",
				accepted: false,
			},
		};
	},
	methods: {
		register: function () {
			this.$inertia.post(this.route("register"), {
				name: this.form.name,
				shop_name: this.form.shop_name,
				phone: this.form.phone,
				email: this.form.email,
				password: this.form.password,
				password_confirmation: this.form.password_confirmation,
			});
		},
	},
};
</script>

<style>
</style>
