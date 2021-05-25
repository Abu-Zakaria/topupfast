<template>
  <layout name="Customer">
    <!-- Customer list start -->
    <section class="users-list-wrapper">
      <!-- Ag Grid users list section start -->
      <div id="basic-examples">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div v-if="success" class="alert alert-success">
                {{ success }}
              </div>

              <div class="table-responsive" v-if="customers.data.length > 0">
                <table
                  id="data-table"
                  class="table table-bordered display responsive nowrap mb-0"
                  style="width: 100%"
                >
                  <thead>
                    <tr>
                      <th scope="col">S.N.</th>
                      <th>Name</th>
                      <th>Contact No.</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th class="text-right">Initial Balance</th>
                      <th>Created At</th>
                      <th class="text-center">Status</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(customer, index) in customers.data"
                      :key="customer.id"
                    >
                      <th>{{ index + 1 }}</th>
                      <th>{{ customer.name }}</th>
                      <th>{{ customer.phone }}</th>
                      <th>{{ customer.email }}</th>
                      <th>{{ customer.address }}</th>
                      <th class="text-right">{{ customer.initial_balance }}</th>
                      <td>{{ customer.default_date_time }}</td>
                      <td
                        v-html="$options.filters.status(customer.status)"
                      ></td>
                      <td class="text-center">
                        <a
                          v-if="$can('customer_edit')"
                          @click.prevent="setData(customer)"
                          href=""
                          class="text-info"
                          role="button"
                          ><i class="feather icon-edit"></i
                        ></a>
                        <a
                          v-if="$can('customer_delete')"
                          @click.prevent="remove(customer)"
                          href=""
                          class="text-warning"
                          role="button"
                          ><i class="feather icon-trash"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <model>
        <template v-slot:header>
          <h4 class="modal-title" id="myModalLabel1">{{ modelTitle }}</h4>
          <button
            type="button"
            @click="cleanForm"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </template>

        <form @submit.prevent="storeOrUpdate">
          <div class="modal-body">
            <div class="form-group">
              <label>Customer Name</label>
              <input
                type="text"
                placeholder="Customer Name"
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
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
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
            <div class="form-group">
              <label>Initial Balance</label>
              <input
                type="number"
                placeholder="Initial Balance"
                class="form-control"
                :class="[errors.initial_balance ? 'is-invalid' : '']"
                v-model="form.initial_balance"
              />
              <span
                v-if="errors.initial_balance"
                class="invalid-feedback"
                style="display: block"
                role="alert"
              >
                <strong>{{ errors.initial_balance[0] }}</strong>
              </span>
            </div>

            <div class="form-group mb-0">
              <label>Address</label>
              <textarea
                placeholder="Address"
                class="form-control"
                :class="[errors.address ? 'is-invalid' : '']"
                v-model="form.address"
                rows="3"
              ></textarea>
              <span
                v-if="errors.address"
                class="invalid-feedback"
                style="display: block"
                role="alert"
              >
                <strong>{{ errors.address[0] }}</strong>
              </span>
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
      </model>
      <!-- Ag Grid users list section end -->
    </section>
    <!-- Customer list ends -->
  </layout>
</template>

<script>
import Layout from "../../Shared/Layout";
import Model from "../../Components/Model";
export default {
  name: "Index",
  components: { Model, Layout },
  props: {
    success: String,
    customers: Object,
    errors: Object,
  },
  data: function () {
    return {
      editMode: false,
      modelTitle: "Create New Customer",
      form: {
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        initial_balance: "",
        status: "",
      },
    };
  },
  methods: {
    setData: function (data) {
      this.modelTitle = `Edit ${data.name}'s Information`;
      this.editMode = true;
      this.form.name = data.name;
      this.form.phone = data.phone;
      this.form.email = data.email;
      this.form.address = data.address;
      this.form.initial_balance = data.initial_balance;
      this.form.status = data.status;
      this.form.id = data.id;
      $("#default").modal("show");
    },
    closeModel: function () {
      $("#default").modal("hide");
    },
    cleanForm: function () {
      this.modelTitle = "Create New Customer";
      this.editMode = false;
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.address = "";
      this.form.initial_balance = "";
      this.form.id = "";
      this.form.status = "";
      Object.keys(this.errors).forEach((key, value) => {
        this.errors[key] = "";
      });
    },
    storeOrUpdate: function () {
      if (this.editMode) {
        this.update();
      } else {
        this.store();
      }
    },
    store: function () {
      const self = this;
      this.$inertia
        .post(this.route("customers.store"), {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          address: this.form.address,
          initial_balance: this.form.initial_balance,
        })
        .then(function () {
          if (Object.keys(self.errors).length === 0) {
            self.closeModel();
            self.cleanForm();
            self.$toast("Customer Created Successfully");
          }
        });
    },
    update: function () {
      const self = this;
      this.$inertia
        .post(this.route("customers.update", this.form.id), {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          address: this.form.address,
          initial_balance: this.form.initial_balance,
          status: this.form.status,
          _method: "put",
        })
        .then(function () {
          if (Object.keys(self.errors).length === 0) {
            self.closeModel();
            self.cleanForm();
            self.$toast("Customer Updated Successfully");
          }
        });
    },
    remove: async function (customer) {
      if (await this.$confirm()) {
        this.$inertia.delete(this.route("customers.destroy", customer.id));
        this.$toast(`${customer.name} deleted successfully`);
      }
    },
  },
};
</script>

<style>
</style>
