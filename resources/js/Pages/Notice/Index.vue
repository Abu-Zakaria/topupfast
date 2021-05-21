<template>
<layout name="Brand">
	<section class="users-list-wrapper">
  		<div id="basic-examples">
			<div class="card">
				<div class="card-content">
					<div class="card-body">

						<div v-if="success" class="alert alert-success">
							{{ success }}
						</div>

				        <div class="mb-2 text-right">
				        	<button class="btn btn-sm btn-primary" @click="openModal()">Add New</button>
				        </div>

				        <table class="table table-bordered table-sm table-condensed">
				            <thead>
				            <tr>
								<th>#</th>
				                <th>Notice</th>
				                <th>Mode</th>
				                <th>Action</th>
				            </tr>
				            </thead>
				            <tr v-for="(row , index) in notices.data" :key="index">
				                <td>{{ index+1 }}</td>
				                <td>{{ row.notice }}</td>
				                <td>{{ row.mode }}</td>
				                <td width="200">
				                    <button @click="edit(row)" class="btn btn-sm btn-primary">Edit</button>
				                    <button @click="deleteRow(row)" class="btn btn-sm btn-danger">Del</button>
				                </td>
				            </tr>
				        </table>

				        <pagination :links="notices.links"></pagination>

				        <div class="modal fade" id="modal">
				            <div class="modal-dialog">

				                <div class="modal-content">
				                    <div class="modal-header">
				                        <h4 class="modal-title">New Contact</h4>
				                    </div>
				                    <div class="modal-body">

				                        <div class="form-group">
				                            <label for="name"><b>notice</b></label>
				                            <input class="form-control"  :class="[errors.notice ? 'is-invalid' : '']" required id="notice" placeholder="notice" v-model="form.notice"/>
				                            <span
						                          v-if="errors.notice"
						                          class="invalid-feedback"
						                          role="alert"
						                        >
						                        <strong>{{ errors.notice[0] }}</strong>
						                   </span>
				                        </div>

				                        <div class="form-group">
				                            <label for="mode"><b>mode</b></label>
				                            <input class="form-control"  :class="[errors.mode ? 'is-invalid' : '']" required id="mode" placeholder="mode" v-model="form.mode"/>
				                            <span
						                          v-if="errors.mode"
						                          class="invalid-feedback"
						                          role="alert"
						                        >
						                        <strong>{{ errors.mode[0] }}</strong>
						                   </span>
				                        </div>

				                    </div>
				                    <div class="modal-footer">
				                        <button type="button" class="btn btn-default" @click="closeModal()">Close</button>
				                        <button type="submit" class="btn btn-primary" v-show="!editMode" @click="save(form)">Save
				                        </button>
				                        <button type="submit" class="btn btn-primary" v-show="editMode" @click="update(form)">Update
				                        </button>
				                    </div>
				                </div><!-- /.modal-content -->

				            </div><!-- /.modal-dialog -->
				        </div><!-- /.modal -->

				    </div>
				</div>
			</div>
		</div>
    </section>
</layout>
</template>

<script>
	import Layout from "../../Shared/Layout";
	import Pagination from './../../Shared/Pagination';
	export default {
		name: "notice",
		components: {Layout,Pagination},
		props: {
	      msg: String,
	      notices: Object,
	      success: String,
	      errors: Object,
	    },
        data() {
            return {
                editMode: false,
                form: {
                    notice: null,
                    mode: null,
                },
            }
        },
        methods: {
			setLogo(e) {
				this.form.logo = e.target.files[0];
			},
            openModal: function () {
                $('#modal').modal('show')
            },
            closeModal: function () {
                $('#modal').modal('hide')
                this.reset();
                this.editMode=false;
            },
            reset: function () {
                this.form = {
                    notice: null,
                    mode: null,
                }
            },
            save: function (data) {
				var formData = new FormData();
				formData.append("notice", data.notice);
                this.$inertia.post('/notice', formData)
				this.reset();
                this.closeModal();
                this.editMode = false;
            },
            edit: function (data) {
                this.form = Object.assign({}, data);
                this.editMode = true;
                this.openModal();
            },
            update: function (data) {
				if (!confirm('Sure')) return;
				var formData = new FormData();
				formData.append("notice", data.notice);
				formData.append("mode", data.mode);
				formData.append("_method", 'PUT');
                // formData._method = 'PUT';
                this.$inertia.post('/notice/' + data.id, formData)
                this.reset();
                this.closeModal();
            },
            deleteRow: function (data) {
                if (!confirm('Sure')) return;
                data._method = 'DELETE';
                this.$inertia.post('/notice/' + data.id, data)
                this.reset();
                this.closeModal();
            }
        }
    }
</script>

<style>
</style>
