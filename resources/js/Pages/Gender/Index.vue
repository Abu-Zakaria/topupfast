<template>
  <layout name="Dashboard">
    <!-- gender list start -->
    <section class="users-list-wrapper">
      <!-- Ag Grid users list section start -->
      <div id="basic-examples">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div v-if="success" class="alert alert-success">
                {{ success }}
              </div>

              <div class="table-responsive" v-if="genders.data.length > 0">
                <table id="data-table" class="table table-bordered display responsive nowrap mb-0" style="width: 100%">
                  <thead>
                  <tr>
                    <th scope="col">S.N.</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(gender, index) in genders.data" :key="gender.id">
                      <th>{{ index + 1 }}</th>
                      <th>{{ gender.name }}</th>
                      <td>{{ gender.default_date_time }}</td>
                      <td v-html="$options.filters.status(gender.status)"></td>
                      <td class="text-center">
                        <a @click.prevent="setData(gender)" href="" class="text-info" role="button"><i class="feather icon-edit"></i></a>
                        <a @click.prevent="remove(gender)" href="" class="text-warning" role="button"><i class="feather icon-trash"></i></a>
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
          <button type="button" @click="cleanForm" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </template>

        <form @submit.prevent="storeOrUpdate">
          <div class="modal-body">
              <div class="form-group mb-0">
                <input type="text"
                       placeholder="Gender Name"
                       class="form-control"
                        :class="[errors.name ? 'is-invalid' : '']"
                        v-model="form.name">
              </div>
              <span v-if="errors.name" class="invalid-feedback" style="display: block;" role="alert">
                <strong>{{ errors.name[0] }}</strong>
              </span>

              <label class="float-left mt-2" v-if="editMode">
                <input type="checkbox" v-model="form.status" :checked="[form.status ? true : false]">
                {{ form.status ? 'Active' : 'Inactive'}}
              </label>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-success waves-effect waves-light">{{ editMode ? 'Update' : 'Create' }}</button>
            <button type="button" @click="cleanForm" class="btn" data-dismiss="modal">Cancel</button>
          </div>
        </form>
      </model>
      <!-- Ag Grid users list section end -->
    </section>
    <!-- gender list ends -->
  </layout>
</template>

<script>
    import Layout from "../../Shared/Layout";
    import Model from "../../Components/Model";
    export default {
        name: "Index",
        components: {Model, Layout},
        props: {
          success: String,
          genders: Object,
          errors: Object,
        },
        data: function () {
          return {
            editMode: false,
            modelTitle: 'Create New Gender',
            form: {
              id: '',
              name: '',
              status: '',
            }
          }
        },
        methods: {
          setData: function (data) {
            this.modelTitle = `Edit ${data.name}'s Information`;
            this.editMode = true;
            this.form.name = data.name;
            this.form.status = data.status;
            this.form.id = data.id;
            $("#default").modal('show');
          },
          closeModel: function () {
            $("#default").modal('hide');
          },
          cleanForm: function () {
            this.modelTitle = 'Create New Gender';
            this.editMode = false;
            this.form.name = '';
            this.form.id = '';
            this.form.status = '';
            Object.keys(this.errors).forEach((key, value) => {
              this.errors[key] = '';
            });
          },
          storeOrUpdate: function () {
            if (this.editMode) {
              this.update();
            }else {
              this.store();
            }
          },
          store: function () {
            const self = this;
            this.$inertia.post(this.route('genders.store'), {
              name: this.form.name
            }).then(function () {
              if (Object.keys(self.errors).length === 0) {
                self.closeModel();
                self.cleanForm();
                self.$toast('Gender Created Successfully');
              }
            });
          },
          update: function () {
            const self = this;
            this.$inertia.post(this.route('genders.update', this.form.id), {
              name: this.form.name,
              status: this.form.status,
              _method: "put"
            }).then(function () {
              if (Object.keys(self.errors).length === 0) {
                self.closeModel();
                self.cleanForm();
                self.$toast('Gender Updated Successfully');
              }
            });
          },
          remove: async function (gender) {
            if (await this.$confirm()) {
              this.$inertia.delete(this.route('genders.destroy', gender.id));
              this.$toast(`${gender.name } deleted successfully`);
            }
          }
        }
    }
</script>

<style>

</style>
