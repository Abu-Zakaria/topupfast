<template>
  <auth-layout name="Subscribe">
    <section class="row flexbox-container">
      <div class="col-xl-12 col-10 d-flex justify-content-center">
        <div class="card bg-authentication rounded-0 mb-0">
          <div class="row m-0">
            <div
              class="col-lg-12 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0"
            >
              <img src="/images/pages/register.jpg" alt="branding logo" />
            </div>
            <div class="col-12 p-0">
              <div class="card rounded-0 mb-0 p-2">
                <div class="card-header pt-50 pb-1">
                  <div class="card-title">
                    <h4 class="mb-0">Subscribe Now</h4>
                  </div>
                </div>
                <div class="card-content">
                  <div class="card-body pt-0">
                    <form @submit.prevent="subscribe">
                      <div class="row form-label-group">
                        <div class="col-md-4 col-sm-12">
                          <label
                            >Shop Name <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            :class="[errors.shop_name ? 'is-invalid' : '']"
                            v-model="form.shop_name"
                            placeholder="Shop Name"
                            autofocus
                          />
                          <span
                            v-if="errors.shop_name"
                            class="invalid-feedback"
                            role="alert"
                          >
                            <strong>{{ errors.shop_name[0] }}</strong>
                          </span>
                        </div>
                        <div class="col-md-4 col-sm-12">
                          <label
                            >Shop Contact No.
                            <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            :class="[errors.shop_phone ? 'is-invalid' : '']"
                            v-model="form.shop_phone"
                            placeholder="Shop Contact No."
                          />
                          <span
                            v-if="errors.shop_phone"
                            class="invalid-feedback"
                            role="alert"
                          >
                            <strong>{{ errors.shop_phone[0] }}</strong>
                          </span>
                        </div>
                        <div class="col-md-4 col-sm-12">
                          <label>Shop Email</label>
                          <input
                            type="email"
                            class="form-control"
                            :class="[errors.shop_email ? 'is-invalid' : '']"
                            v-model="form.shop_email"
                            placeholder="Shop Email"
                          />
                          <span
                            v-if="errors.shop_email"
                            class="invalid-feedback"
                            role="alert"
                          >
                            <strong>{{ errors.shop_email[0] }}</strong>
                          </span>
                        </div>
                      </div>
                      <div class="row form-label-group">
                        <div class="col-md-4 col-sm-12 text-center">
                          <label>Shop Logo</label>
                          <div
                            class="banner-logo-upload-box mx-auto"
                            style="
                              width: 200px;
                              height: 200px;
                              border: 1px solid #ddd;
                              border-radius: 4px;
                              box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
                            "
                          >
                            <img
                              id="avatar"
                              class="users-avatar-shadow rounded"
                              height="90"
                              width="90"
                              :src="shop_logo_url"
                              alt=""
                            />
                            <label class="btn-pill">
                              <i class="fa fa-camera"></i>
                              <input
                                id="image"
                                @change="showImage"
                                type="file"
                                name="avatar"
                                class="hidden"
                              />
                            </label>
                          </div>
                        </div>
                        <div class="col-md-8 col-sm-12">
                          <div class="row form-group">
                            <div class="col-12">
                              <label
                                >Shop Address
                                <span class="text-danger">*</span></label
                              >
                              <textarea
                                rows="3"
                                class="form-control"
                                :class="[
                                  errors.shop_address ? 'is-invalid' : '',
                                ]"
                                v-model="form.shop_address"
                              ></textarea>
                              <span
                                v-if="errors.shop_address"
                                class="invalid-feedback"
                                role="alert"
                              >
                                <strong>{{ errors.shop_address[0] }}</strong>
                              </span>
                            </div>
                          </div>
                          <div class="row form-group">
                            <div class="col-md-6 col-sm-12">
                              <label>Shop Start At</label>
                              <vue-timepicker
                                :class="[errors.shop_open ? 'is-invalid' : '']"
                                v-model="form.shop_open"
                                placeholder="Shop Close At"
                                format="hh:mm A"
                              ></vue-timepicker>
                              <span
                                v-if="errors.shop_open"
                                class="invalid-feedback"
                                role="alert"
                              >
                                <strong>{{ errors.shop_open[0] }}</strong>
                              </span>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <label>Shop Close At</label>
                              <vue-timepicker
                                :class="[errors.shop_close ? 'is-invalid' : '']"
                                v-model="form.shop_close"
                                placeholder="Shop Close At"
                                format="hh:mm A"
                              ></vue-timepicker>
                              <span
                                v-if="errors.shop_close"
                                class="invalid-feedback"
                                role="alert"
                              >
                                <strong>{{ errors.shop_close[0] }}</strong>
                              </span>
                            </div>
                          </div>
                        </div>
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
                        Subscribe Now
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
  name: "Subscribe",
  components: { AuthLayout },
  props: {
    errors: Object,
  },
  data: function () {
    return {
      form: {
        shop_name: "",
        shop_phone: "",
        shop_email: "",
        shop_address: "",
        shop_logo: null,
        shop_open: "",
        shop_close: "",
        accepted: false,
      },
      shop_logo_url: "",
    };
  },
  methods: {
    showImage: function (e) {
      const shopLogo = e.target.files[0];
      this.form.shop_logo = shopLogo;
      this.shop_logo_url = URL.createObjectURL(shopLogo);
    },
    subscribe: function () {
      let formData = new FormData();
      formData.append("shop_name", this.form.shop_name);
      formData.append("shop_phone", this.form.shop_phone);
      formData.append("shop_email", this.form.shop_email);
      formData.append("shop_address", this.form.shop_address);
      formData.append("shop_logo", this.form.shop_logo);
      formData.append("shop_open", this.form.shop_open);
      formData.append("shop_close", this.form.shop_close);
      this.$inertia.post(this.route("subscribe.store"), formData);
    },
  },
};
</script>

<style>
@import "~vue2-timepicker/dist/VueTimepicker.css";
</style>
