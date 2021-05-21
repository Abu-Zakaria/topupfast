<template>
  <layout name="UserProfile">
    <!-- user list start -->
    <section class="users-list-wrapper">
      <!-- Ag Grid users list section start -->
      <div id="basic-examples">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="card-body">
                <alert v-if="success">{{ success }}</alert>
                <ul class="nav nav-tabs mb-3" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link d-flex align-items-center active"
                      id="account-tab"
                      data-toggle="tab"
                      href="#account"
                      aria-controls="account"
                      role="tab"
                      aria-selected="true"
                    >
                      <i class="feather icon-user mr-25"></i
                      ><span class="d-none d-sm-block">Account</span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    class="tab-pane active"
                    id="account"
                    aria-labelledby="account-tab"
                    role="tabpanel"
                  >
                    <!-- users edit media object start -->
                    <div class="media mb-2">
                      <div
                        class="banner-logo-upload-box mx-auto"
                        style="width: 105px; height: 105px"
                      >
                        <img
                          id="avatar"
                          class="users-avatar-shadow rounded"
                          height="90"
                          width="90"
                          :src="user.avatar_small"
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
                      <div class="media-body mt-50 ml-2">
                        <h4 class="media-heading">{{ user.name }}</h4>
                        <div class="col-12 d-flex mt-1 px-0">
                          <button
                            type="button"
                            @click="uploadImage"
                            class="btn btn-primary d-none d-sm-block mr-75 waves-effect waves-light"
                          >
                            Change
                          </button>
                          <a
                            href="#"
                            class="btn btn-primary d-block d-sm-none mr-75 waves-effect waves-light"
                            ><i class="feather icon-edit-1"></i
                          ></a>
                          <a
                            href="#"
                            class="btn btn-outline-danger d-none d-sm-block waves-effect waves-light"
                            >Remove</a
                          >
                          <a
                            href="#"
                            class="btn btn-outline-danger d-block d-sm-none waves-effect waves-light"
                            ><i class="feather icon-trash-2"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <!-- users edit media object ends -->

                    <!-- users edit form start -->
                    <form @submit.prevent="update">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <div class="controls">
                              <label>Name</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Name"
                                v-model="user.name"
                              />
                              <div v-if="errors.name" class="text-danger">
                                {{ errors.name[0] }}
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="controls">
                              <label>Contact No.</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Contact No."
                                v-model="user.phone"
                              />
                              <div v-if="errors.phone" class="invalid-feedback">
                                {{ errors.phone[0] }}
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="controls">
                              <label>E-mail</label>
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                v-model="user.email"
                              />
                              <div v-if="errors.email" class="invalid-feedback">
                                {{ errors.email[0] }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <label>Gender</label>
                            <select
                              class="form-control"
                              v-model="user.gender_id"
                            >
                              <option>Select ...</option>
                              <option
                                v-for="gender in genders"
                                :value="gender.id"
                                :key="gender.id"
                                :selected="[
                                  gender.id == user.gender_id ? true : false,
                                ]"
                              >
                                {{ gender.name }}
                              </option>
                            </select>
                            <div
                              v-if="errors.gender_id"
                              class="invalid-feedback"
                            >
                              {{ errors.gender_id[0] }}
                            </div>
                          </div>
                          <div class="form-group">
                            <label>Role</label>
                            <select
                              v-model="user.religion_id"
                              class="form-control"
                            >
                              <option value="">Select ...</option>
                              <option
                                v-for="religion in religions"
                                :value="religion.id"
                                :key="religion.id"
                                :selected="[
                                  religion.id == user.religion_id
                                    ? true
                                    : false,
                                ]"
                              >
                                {{ religion.name }}
                              </option>
                            </select>
                            <div
                              v-if="errors.religion_id"
                              class="invalid-feedback"
                            >
                              {{ errors.religion_id[0] }}
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="controls">
                              <label>Birth Date</label>
                              <date-picker
                                class="form-control"
                                placeholder="Birth Date"
                                v-model="user.birth_date"
                              >
                              </date-picker>
                              <div v-if="errors.birth_date" class="text-danger">
                                {{ errors.birth_date[0] }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1"
                        >
                          <button
                            type="submit"
                            class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1 waves-effect waves-light"
                          >
                            Save Changes
                          </button>
                          <button
                            type="reset"
                            class="btn btn-outline-warning waves-effect waves-light"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </form>
                    <!-- users edit form ends -->

                    <!-- users password edit form start -->
                    <form @submit.prevent="updatePassword">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <div class="controls">
                              <label>Password</label>
                              <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                v-model="form.password"
                              />
                              <div v-if="errors.password" class="text-danger">
                                {{ errors.password[0] }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <div class="controls">
                              <label>Confirm Password</label>
                              <input
                                type="password"
                                class="form-control"
                                placeholder="Confirm Password"
                                v-model="form.password_confirmation"
                              />
                              <div
                                v-if="errors.password_confirmation"
                                class="text-danger"
                              >
                                {{ errors.password_confirmation[0] }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1"
                        >
                          <button
                            type="submit"
                            class="btn btn-outline-warning waves-effect waves-light"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </form>
                    <!-- users password edit form ends -->
                  </div>
                  <div
                    class="tab-pane"
                    id="information"
                    aria-labelledby="information-tab"
                    role="tabpanel"
                  >
                    <!-- users address edit Info form start -->
                    <!-- users address edit Info form ends -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- user list ends -->
  </layout>
</template>

<script>
import Layout from "../../Shared/Layout";
import Alert from "../../Components/Alert";
export default {
  name: "UserProfile",
  components: { Alert, Layout },
  props: {
    user: Object,
    genders: Array,
    religions: Array,
    errors: Object,
    success: String,
  },
  data: function () {
    return {
      avatar: null,
      form: {
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    updatePassword: function () {
      let self = this;
      this.$inertia
        .post(this.route("users.password.update", this.user.id), {
          password: this.form.password,
          password_confirmation: this.form.password_confirmation,
        })
        .then((response) => {
          self.form.password = "";
          self.form.password_confirmation = "";
        });
    },
    update: function () {
      this.$inertia.post(
        this.route("users.profile.account.update", this.user.id),
        {
          name: this.user.name,
          phone: this.user.phone,
          email: this.user.email,
          gender_id: this.user.gender_id,
          religion_id: this.user.religion_id,
          birth_date: this.user.birth_date,
        }
      );
    },
    showImage: function (e) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      $("#avatar").attr("src", url);
      this.avatar = file;
    },
    uploadImage: function () {
      if (this.avatar !== null) {
        const formData = new FormData();
        formData.append("avatar", this.avatar);
        this.$inertia.post(
          this.route("users.profile.avatar.update", this.user.id),
          formData
        );
      }
    },
  },
};
</script>

<style>
</style>
