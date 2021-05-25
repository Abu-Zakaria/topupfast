<template>
  <layout name="ShopAdmin">
    <!-- shop list start -->
    <section class="users-list-wrapper">
      <!-- Ag Grid users list section start -->
      <div id="basic-examples">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div v-if="success" class="alert alert-success">
                {{ success }}
              </div>

              <form @submit.prevent="store">
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>User Name <strong class="text-danger">*</strong></label>
                        <input
                          type="text"
                          placeholder="User Name"
                          class="form-control"
                          :class="[errors.name ? 'is-invalid' : '']"
                          v-model="form.name"
                        />
                        <span
                          v-if="errors.name"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.name[0] }}</strong>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Contact No. <strong class="text-danger">*</strong></label>
                        <input
                          type="text"
                          placeholder="Contact No."
                          class="form-control"
                          :class="[errors.phone ? 'is-invalid' : '']"
                          v-model="form.phone"
                        />
                        <span
                          v-if="errors.phone"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.phone[0] }}</strong>
                        </span>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Email Address. <strong class="text-danger">*</strong></label>
                        <input
                          type="email"
                          placeholder="Email Address"
                          class="form-control"
                          :class="[errors.email ? 'is-invalid' : '']"
                          v-model="form.email"
                        />
                        <span
                          v-if="errors.email"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.email[0] }}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Gender <strong class="text-danger">*</strong></label>
                        <multi-select
                          v-model="form.gender"
                          :options="genders"
                          :class="[errors.gender_id ? 'is-invalid' : '']"
                          label="name"
                          track-by="name"
                          :searchable="true"
                          :close-on-select="true"
                          multiple
                          :placeholder="__('Gender')"
                        >
                        </multi-select>
                        <span
                          v-if="errors.gender_id"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.gender_id[0] }}</strong>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Religion <strong class="text-danger">*</strong></label>
                        <multi-select
                          v-model="form.religion"
                          :options="religions"
                          :class="[errors.religion_id ? 'is-invalid' : '']"
                          label="name"
                          track-by="name"
                          :searchable="true"
                          :close-on-select="true"
                          multiple
                          :placeholder="__('Religion')"
                        >
                        </multi-select>
                        <span
                          v-if="errors.religion_id"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.religion_id[0] }}</strong>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Blood Group </label>
                        <multi-select
                          v-model="form.blood_group"
                          :options="blood_groups"
                          :class="[errors.blood_group_id ? 'is-invalid' : '']"
                          label="name"
                          track-by="name"
                          :searchable="true"
                          :close-on-select="true"
                          multiple
                          :placeholder="__('Blood Group')"
                        >
                        </multi-select>
                        <span
                          v-if="errors.blood_group_id"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.blood_group_id[0] }}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Birth Date</label>
                        <date-picker
                          v-model="form.birth_date"
                          :class="[errors.birth_date ? 'is-invalid' : '']"
                        >
                        </date-picker>
                        <span
                          v-if="errors.birth_date"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.birth_date[0] }}</strong>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Role <strong class="text-danger">*</strong></label>
                        <multi-select
                          v-model="form.role"
                          :options="roles"
                          :class="[errors.role_id ? 'is-invalid' : '']"
                          label="name"
                          track-by="name"
                          :searchable="true"
                          :close-on-select="true"
                          multiple
                          :placeholder="__('Role')"
                        >
                        </multi-select>
                        <span
                          v-if="errors.role_id"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.role_id[0] }}</strong>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.address"
                          placeholder="Address"
                        />
                        <span
                          v-if="errors.address"
                          class="invalid-feedback"
                          style="display: block"
                          role="alert"
                        >
                          <strong>{{ errors.address[0] }}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <label class="float-left mt-2" v-if="editMode">
                    <input
                      type="checkbox"
                      v-model="form.status"
                      :checked="[form.status ? true : false]"
                    />
                    {{ form.status ? "Active" : "Inactive" }}
                  </label>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    class="btn btn-success waves-effect waves-light"
                  >
                    {{ editMode ? "Update" : "Create" }}
                  </button>
                  <button
                    type="button"
                    @click="cleanForm"
                    class="btn"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Ag Grid users list section end -->
    </section>
    <!-- database list ends -->
  </layout>
</template>


<script>
import Layout from "../../Shared/Layout";
export default {
  name: "ShopAdmin",
  components: { Layout },
  props: {
    success: String,
    shop: Object,
    genders: Array,
    religions: Array,
    blood_groups: Array,
    roles: Array,
    errors: Object,
  },
  data: function () {
    return {
      editMode: false,
      form: {
        id: "",
        name: "",
        avatar: null,
        phone: "",
        email: "",
        gender: null,
        religion: null,
        blood_group: null,
        role: null,
        status: "",
        birth_date: new Date(),
        nationality: "Bangladeshi",
        connection: "tenant",
        address: "",
      },
    };
  },
  methods: {
    cleanForm: function () {
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.birth_date = new Date();
      this.form.gender = null;
      this.form.religion = null;
      this.form.blood_group = null;
      this.form.role = null;
      this.form.avatar = null;
    },
    store: function () {
      let gender_id = this.form.gender ? this.form.gender.id : "";
      let blood_group_id = this.form.blood_group
        ? this.form.blood_group.id
        : "";
      let religion_id = this.form.religion ? this.form.religion.id : "";
      let role_id = this.form.role ? this.form.role.id : "";
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("address", this.form.address);
      formData.append("birth_date", this.form.birth_date);
      formData.append("nationality", this.form.nationality);
      formData.append("avatar", this.form.avatar);
      formData.append("connection", this.form.connection);
      formData.append("shop_id", this.shop.id);

      formData.append("gender_id", gender_id);
      formData.append("blood_group_id", blood_group_id);
      formData.append("religion_id", religion_id);
      formData.append("role_id", role_id);
      const self = this;
      this.$inertia.post(this.route("users.store"), formData).then(function () {
        if (Object.keys(self.errors).length === 0) {
          self.cleanForm();
        }
      });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>