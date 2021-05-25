<template>
  <layout name="RoleIndex">
    <!-- users list start -->
    <section class="users-list-wrapper">
      <!-- Ag Grid users list section start -->
      <div id="basic-examples">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div v-if="success" class="alert alert-success">
                {{ success }}
              </div>

              <div class="table-responsive" v-if="roles.data.length > 0">
                <table id="data-table" class="table table-bordered display responsive nowrap mb-0" style="width: 100%">
                  <thead>
                  <tr>
                    <th scope="col">S.N.</th>
                    <th>Name</th>
                    <th>Permissions</th>
                    <th>Created At</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(role, index) in roles.data" :key="role.id">
                      <th>{{ index + 1 }}</th>
                      <th>{{ role.name }}</th>
                      <th>
                        <span 
                        class="badge permission-badge" 
                        v-for="permission in role.permissions" 
                        :key="permission.id"
                        :class="[permission.status === 1 ? 'badge-success' : 'badge-warning' ]">
                          {{ permission.name }}
                        </span>
                      </th>
                      <td>{{ role.default_date_time }}</td>
                      <td v-html="$options.filters.status(role.status)"></td>
                      <td class="text-center">
                        <a @click.prevent="setData(role)" href="" class="text-info" role="button"><i class="feather icon-edit"></i></a>
                        <a @click.prevent="remove(role)" href="" class="text-warning" role="button"><i class="feather icon-trash"></i></a>
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
              <div class="form-group">
                <input type="text"
                       placeholder="Role Name"
                       class="form-control"
                        :class="[errors.name ? 'is-invalid' : '']"
                        v-model="form.name">
                <span v-if="errors.name" class="invalid-feedback" style="display: block;" role="alert">
                  <strong>{{ errors.name[0] }}</strong>
                </span>
              </div>

              <div class="form-group mb-0">
                <multi-select
                    v-model="form.permissions"
                    :options="permissions"
                    label="name"
                    track-by="name"
                    :searchable="true"
                    :close-on-select="true"
                    multiple
                    :placeholder="__('Permissions')">
                </multi-select>
                <span v-if="errors.permissions" class="invalid-feedback" style="display: block;" role="alert">
                  <strong>{{ errors.permissions[0] }}</strong>
                </span>
              </div>

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
    <!-- users list ends -->
  </layout>
</template>

<script>
    import Layout from "../../Shared/Layout";
    import Model from "../../Components/Model";
    export default {
        name: "RoleIndex",
        components: {Model, Layout},
        props: {
          success: String,
          roles: Object,
          permissions: Array,
          errors: Object,
        },
        data: function () {
          return {
            editMode: false,
            modelTitle: 'Create New Role',
            form: {
              id: '',
              name: '',
              status: '',
              permissions: []
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
            this.form.permissions = data.permissions;
            $("#default").modal('show');
          },
          closeModel: function () {
            $("#default").modal('hide');
          },
          cleanForm: function () {
            this.modelTitle = 'Create New Role';
            this.editMode = false;
            this.form.name = '';
            this.form.id = '';
            this.form.status = '';
            this.form.permissions = [];
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
            let permissions = this.form.permissions.map(function (permission) {
              return permission.id;
            });
            this.$inertia.post(this.route('roles.store'), {
              name: this.form.name,
              permissions: permissions,
            }).then(function () {
              if (Object.keys(self.errors).length === 0) {
                self.closeModel();
                self.cleanForm();
                self.$toast('Role Created Successfully');
              }
            });

          },
          update: function () {
            const self = this;
            let permissions = this.form.permissions.map(function (permission) {
              return permission.id;
            });
            this.$inertia.post(this.route('roles.update', this.form.id), {
              name: this.form.name,
              permissions: permissions,
              status: this.form.status,
              _method: "put"
            }).then(function () {
              if (Object.keys(self.errors).length === 0) {
                self.closeModel();
                self.cleanForm();
                self.$toast('Role Updated Successfully');
              }
            });
          },
          remove: async function (role) {
            if (await this.$confirm()) {
              this.$inertia.delete(this.route('roles.destroy', role.id));
              this.$toast(`${role.name } deleted successfully`);
            }
          }
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.permission-badge {
  font-size: 15px;
  margin: 5px;
}
</style>
