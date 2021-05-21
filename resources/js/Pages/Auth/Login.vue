<template>
	<auth-layout name="Login">
		<section class="row flexbox-container">
			<div class="col-xl-8 col-11 d-flex justify-content-center">
				<div class="card bg-authentication rounded-0 mb-0">
					<div class="row m-0">
						<div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
							<img src="/images/pages/login.png" alt="branding logo">
						</div>
						<div class="col-lg-6 col-12 p-0">
							<div class="card rounded-0 mb-0 px-2 pb-2">
								<div class="card-header pb-1">
									<div class="card-title">
										<h4 class="mb-0">Login</h4>
									</div>
								</div>
								<p class="px-2">Welcome back, please login to your account.</p>
								<div class="card-content">
									<div class="card-body pt-1">
										<form @submit.prevent="login">
											<fieldset class="form-label-group form-group position-relative has-icon-left">

												<input type="text"
															 class="form-control"
															 :class="[errors.email ? 'is-invalid' : '']"
															 v-model="form.email"
															 placeholder="E-Mail Address / Contact No."
															 autocomplete="email" autofocus>

												<div class="form-control-position">
													<i class="feather icon-user"></i>
												</div>
												<label>E-Mail Address</label>
												<span v-if="errors.email" class="invalid-feedback" role="alert">
													<strong>{{ errors.email[0] }}</strong>
											</span>
											</fieldset>

											<fieldset class="form-label-group position-relative has-icon-left">

												<input type="password"
															 class="form-control"
															 :class="[errors.password ? 'is-invalid' : '']"
															 v-model="form.password"
															 placeholder="Password"
															 autocomplete="current-password">

												<div class="form-control-position">
													<i class="feather icon-lock"></i>
												</div>
												<label>Password</label>
												<span v-if="errors.password" class="invalid-feedback" role="alert">
													<strong>{{ errors.password[0] }}</strong>
												</span>
											</fieldset>
											<div class="form-group d-flex justify-content-between align-items-center">
												<div class="text-left">
													<fieldset class="checkbox">
														<div class="vs-checkbox-con vs-checkbox-primary">
															<input type="checkbox" v-model="form.remember">
															<span class="vs-checkbox">
															<span class="vs-checkbox--check">
																<i class="vs-icon feather icon-check"></i>
															</span>
														</span>
															<span class="">Remember me</span>
														</div>
													</fieldset>
												</div>
												<div class="text-right">
													<inertia-link class="card-link" :href="route('password.request')">
													Forgot Password?
													</inertia-link>
												</div>
											</div>
											<button type="submit" class="btn btn-primary float-right btn-inline" :class="[sending ? 'disabled' : '']">Login</button>
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
	name: "Login",
	components: {AuthLayout},
	props: {
			errors: Object
	},
	data: function () {
			return {
				sending: false,
				form: {
					email: '',
					password: '',
					remember: ''
				}
			}
	},
	methods: {
		login:  function () {
			this.sending = true;
			this.$inertia.post(this.route('login'), {
				email: this.form.email,
				password: this.form.password,
				remember: this.form.remember,
			}).then(() => this.sending = false);
		}
	}
} 
</script>

<style>

</style>
