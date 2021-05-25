<template>
	<layout name="ShopIndex">
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

							<div class="table-responsive">
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
											<th>Database</th>
											<th>Created At</th>
											<th class="text-center">Status</th>
											<th class="text-center">Actions</th>
										</tr>
									</thead>
									<tbody v-if="shops.data.length > 0">
										<tr v-for="(shop, index) in shops.data" :key="shop.id">
											<th>{{ index + 1 }}</th>
											<th>{{ shop.name }}</th>
											<th>{{ shop.phone }}</th>
											<th>{{ shop.email }}</th>
											<th>{{ shop.address }}</th>
											<th>{{ shop.database }}</th>
											<td>{{ shop.default_date_time }}</td>
											<td v-html="$options.filters.status(shop.status)"></td>
											<td class="text-center">
												<div class="btn-group dropdown actions-dropodown">
													<button
														type="button"
														class="btn btn-white dropdown-toggle waves-effect waves-light"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														Actions
													</button>
													<div
														class="dropdown-menu"
														x-placement="bottom-start"
														style="
															position: absolute;
															will-change: transform;
															top: 0px;
															left: 0px;
															transform: translate3d(0px, 43px, 0px);
														"
													>
														<a
															v-if="$can('shop_edit')"
															@click.prevent="edit(shop)"
															href=""
															class="dropdown-item text-info"
															role="button"
															><i class="feather icon-edit"></i> Edit</a
														>
														<a
															:href="route('shops.admin.create', shop.id)"
															class="dropdown-item text-primary"
															role="button"
															><i class="feather icon-user"></i> Create Admin</a
														>
														<a
															v-if="$can('branch_access')"
															:href="route('shops.branches.index')"
															class="dropdown-item text-primary"
															role="button"
															><i class="feather icon-user"></i> Branches</a
														>
														<a
															v-if="$can('shop_delete')"
															@click.prevent="remove(shop)"
															href=""
															class="dropdown-item text-warning"
															role="button"
															><i class="feather icon-trash"></i> Destory</a
														>
													</div>
												</div>
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
							<label>Database Name</label>
							<input
								type="text"
								placeholder="Database name"
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
		<!-- database list ends -->
	</layout>
</template>

<script>
import Layout from "../../Shared/Layout";
import Model from "../../Components/Model";
export default {
	name: "ShopIndex",
	components: { Model, Layout },
	props: {
		success: String,
		error: String,
		shops: Object,
		errors: Object,
	},
	data: function () {
		return {
			editMode: false,
			modelTitle: "Create Shop",
			form: {
				id: "",
				name: "",
				connection: "mysql",
				status: "",
			},
		};
	},
	methods: {
		setData: function (data) {
			this.modelTitle = `Edit ${data.name}'s Information`;
			this.editMode = true;
			this.form.name = data.name;
			this.form.connection = data.connection;
			this.form.status = data.status;
			this.form.id = data.id;
			$("#default").modal("show");
		},
		closeModel: function () {
			$("#default").modal("hide");
		},
		cleanForm: function () {
			this.modelTitle = "Create Shop";
			this.editMode = false;
			this.form.name = "";
			this.form.connection = "mysql";
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
				.post(this.route("shops.store"), {
					name: this.form.name,
					connection: this.form.connection,
				})
				.then(function () {
					if (Object.keys(self.errors).length === 0) {
						self.closeModel();
						self.cleanForm();
						self.$toast("Database Created Successfully");
					}
				});
		},
		edit: function (data) {},
		update: function () {
			const self = this;
			this.$inertia
				.post(this.route("shops.update", this.form.id), {
					name: this.form.name,
					connection: this.form.connection,
					status: this.form.status,
					_method: "put",
				})
				.then(function () {
					if (Object.keys(self.errors).length === 0) {
						self.closeModel();
						self.cleanForm();
						self.$toast("Database Updated Successfully");
					}
				});
		},
		remove: async function (database) {
			if (await this.$confirm()) {
				this.$inertia.delete(this.route("shops.destroy", database.id));
				this.$toast(`${database.name} deleted successfully`);
			}
		},
	},
};
</script>

<style>
</style>
