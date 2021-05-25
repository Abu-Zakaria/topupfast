<template>
    <layout name="Brand">
      <section id="dashboard-analytics">
        <div class="row">
                <div class="col-12">
                    <div class="card">
                    <div class="card-header">
                        <h4 class="mb-0">Create new brand</h4>
                        <inertia-link :href="route('brand.index')" class="btn btn-primary float-left btn-inline">Brand List</inertia-link>
                    </div>
                    <div class="card-content">
                        <div class="col-xl-12 col-12 d-flex justify-content-center">
                            <div class="row m-0 w-100">
                                <div class="col-lg-12 col-12 p-0">
                                    <div class="card rounded-0 mb-0 px-2 pb-2">
                                        <div class="card-content">
                                            <div class="card-body pt-1">
                                                <form @submit.prevent="create">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-6 col-sm-12 p-0">
                                                            <fieldset class="form-label-group position-relative has-icon-left m-3">

                                                                <input type="text"
                                                                            class="form-control"
                                                                            :class="[errors.name ? 'is-invalid' : '']"
                                                                            v-model="form.name"
                                                                            autocomplete="current-name">

                                                                <div class="form-control-position">
                                                                </div>
                                                                <label>Name</label>
                                                                <span v-if="errors.name" class="invalid-feedback" role="alert">
                                                                    <strong>{{ errors.name[0] }}</strong>
                                                                </span>
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6 col-sm-12 p-0">
                                                            <fieldset class="form-label-group position-relative has-icon-left m-3">
                                                                <input type="file"
                                                                            class="form-control"
                                                                            :class="[errors.logo ? 'is-invalid' : '']"
                                                                            autocomplete="current-logo">

                                                                <div class="form-control-position">
                                                                </div>
                                                                <label>Logo</label>
                                                                <span v-if="errors.logo" class="invalid-feedback" role="alert">
                                                                    <strong>{{ errors.logo[0] }}</strong>
                                                                </span>
                                                            </fieldset>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6 col-sm-12 p-0">
                                                            <button type="submit" class="btn btn-primary btn-inline  m-3" :class="[sending ? 'disabled' : '']">Create</button>
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
            </div>
          </div>
        </div>
      </section>
    </layout>
</template>

<script>
    import Layout from "../../Shared/Layout";
    export default {
        name: "Brand",
        components: {Layout},
        props: {
			errors: Object
	    },
        data: function () {
			return {
				sending: false,
				form: {
					name: '',
					logo: '',
				}
			}
	    },
        methods: {
            create:  function () {
                this.sending = true;
                this.$inertia.post(this.route('brand.create'), {
                    email: this.form.name,
                    password: this.form.logo,
                }).then(() => this.sending = false);
            }
        }
    }
</script>

<style>

</style>
