<template>
<layout name="UserIndex">
<!-- user list start -->
<section class="users-list-wrapper">
	 
	<div class="mb-6 flex justify-between items-center">
		<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="User Id" :value="searchfrom.user_id" @input="check($event.target.value)">
		<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Email" :value="searchfrom.email" @input="searchemail($event.target.value)">
		<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" placeholder="Phone" :value="searchfrom.phone" @input="searchphone($event.target.value)">
	</div>

	<div id="basic-examples">
		<div class="card">
			<div class="card-content">
				<div class="card-body">
					<div v-if="success" class="alert alert-success">
						{{ success }}
					</div>

					<div class="table-responsive" v-if="users.data.length > 0">
						<table id="data-table" class="table table-bordered display responsive nowrap mb-0" style="width: 100%">
							<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Wallet</th>
								<th>Created At</th>
								<th>Update</th>
								<th class="text-center">Status</th>
								<th class="text-center">Actions</th>
							</tr>
							</thead>
							<tbody>
							<tr v-for="(user, index) in users.data" :key="user.id">
								<th>{{ user.id }}</th>
								<th>{{ user.name }}</th>
								<th>{{ user.email }}</th>
								<th>{{ user.phone }}</th>
								<th>{{ user.wallet }}</th>
								<td>{{ user.created_at }}</td>
								<td><input type="text" :value="user.wallet" :id="user.id"><button @click="updatewallet(user.id)">Update</button></td>
								<td v-html="$options.filters.status(user.status)"></td>
								<td class="text-center">
									<a @click.prevent="setData(user)" href="" class="text-info" role="button"><i class="feather icon-edit"></i></a>
									<a @click.prevent="remove(user)" href="" class="text-warning" role="button"><i class="feather icon-trash"></i></a>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

	<pagination :links="users.links"></pagination>

	<model :size="'modal-lg'">
		<template v-slot:header>
			<h4 class="modal-title" id="myModalLabel1">{{ modelTitle }}</h4>
			<button type="button" @click="cleanForm" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">×</span>
			</button>
		</template>

		<form @submit.prevent="storeOrUpdate">
			<div class="modal-body">
				<div class="row">
					<div class="col-md-4">
						<div class="form-group">
							<input type="text"
										 placeholder="User Name"
										 class="form-control"
										 :class="[errors.name ? 'is-invalid' : '']"
										 v-model="form.name">
							<span v-if="errors.name" class="invalid-feedback" style="display: block;" role="alert">
								<strong>{{ errors.name[0] }}</strong>
							</span>
						</div>
					</div>
					<div class="col-md-4">
							<div class="form-group">
								<input type="text"
											 placeholder="Contact No."
											 class="form-control"
											 :class="[errors.phone ? 'is-invalid' : '']"
											 v-model="form.phone">
								<span v-if="errors.phone" class="invalid-feedback" style="display: block;" role="alert">
									<strong>{{ errors.phone[0] }}</strong>
								</span>
							</div>
					</div>

					<div class="col-md-4">
						<div class="form-group">
							<input type="text"
										 placeholder="Guardian Contact No."
										 class="form-control"
										 :class="[errors.guardian_phone ? 'is-invalid' : '']"
										 v-model="form.guardian_phone">
							<span v-if="errors.guardian_phone" class="invalid-feedback" style="display: block;" role="alert">
								<strong>{{ errors.guardian_phone[0] }}</strong>
							</span>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4">
						<div class="form-group">
							<select
								class="form-control"
								:class="[errors.gender_id ? 'is-invalid' : '']"
								v-model="form.gender_id">
								<option value="">Select Gender ....</option>
								<option v-for="gender in genders" :key="gender.id" :value="gender.id">{{ gender.name }}</option>
							</select>
							<span v-if="errors.gender_id" class="invalid-feedback" style="display: block;" role="alert">
								<strong>{{ errors.gender_id[0] }}</strong>
							</span>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<select
								class="form-control"
								:class="[errors.religion_id ? 'is-invalid' : '']"
								v-model="form.religion_id">
								<option value="">Select Religion ....</option>
								<option v-for="religion in religions" :key="religion.id" :value="religion.id">{{ religion.name }}</option>
							</select>
							<span v-if="errors.religion_id" class="invalid-feedback" style="display: block;" role="alert">
								<strong>{{ errors.religion_id[0] }}</strong>
							</span>
						</div>
					</div>

					<div class="col-md-4">
						<div class="form-group">
							<select
								class="form-control"
								:class="[errors.blood_group_id ? 'is-invalid' : '']"
								v-model="form.blood_group_id">
								<option value="">Select Blood Group ....</option>
								<option v-for="blood_group in blood_groups" :key="blood_group.id" :value="blood_group.id">{{ blood_group.name }}</option>
							</select>
							<span v-if="errors.blood_group_id" class="invalid-feedback" style="display: block;" role="alert">
								<strong>{{ errors.blood_group_id[0] }}</strong>
							</span>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4">
						<div class="form-group">
							<date-picker
								v-model="form.birth_date"
								:class="[errors.birth_date ? 'is-invalid' : '']">
							</date-picker>
							<span v-if="errors.birth_date" class="invalid-feedback" style="display: block;" role="alert">
									<strong>{{ errors.birth_date[0] }}</strong>
								</span>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<input type="email"
										 placeholder="Email Address"
										 class="form-control"
										 :class="[errors.email ? 'is-invalid' : '']"
										 v-model="form.email">
							<span v-if="errors.email" class="invalid-feedback" style="display: block;" role="alert">
									<strong>{{ errors.email[0] }}</strong>
								</span>
						</div>
					</div>
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
<!-- user list ends -->
</layout>
</template>

<script>
	import Layout from "../../Shared/Layout";
	import Model from "../../Components/Model";
	import Pagination from './../../Shared/Pagination';
	import SearchFilter from '@/Shared/SearchFilter'
	import pickBy from 'lodash/pickBy'
	import throttle from 'lodash/throttle'
	import mapValues from 'lodash/mapValues'
	export default {
		name: "UserIndex",
		components: {Model, Layout,Pagination,SearchFilter},
		props: {
			success: String,
			users: Object,
			errors: Object,
			genders: Array,
			religions: Array,
			blood_groups: Array,
			divisions: Array,
			organizations: Object,
			filters: Object,
		},
		data() {
			return {
				editMode: false,
				modelTitle: 'Create New User',
				form: {
					id: '',
					name: '',
					phone: '',
					guardian_phone: '',
					email: '',
					gender_id: '',
					religion_id: '',
					blood_group_id: '',
					birth_date: new Date(),
					nationality: '',
					division: null,
					district: null,
					upazilla: null,
					address: '',
					status: '',
				},
				searchfrom: {
					user_id: this.filters.user_id,
					email  : this.filters.email,
					phone  : this.filters.phone,
				},
			}
		},
		watch: {
			searchfrom: {
				handler: throttle(function() {
					let query = pickBy(this.searchfrom)
					console.log(this.searchfrom)
					this.$inertia.replace(this.route('users.index', Object.keys(query).length ? query : { remember: 'forget' }))
				}, 150),
				deep: true,
			},
		},
		methods: {
			updatewallet(id){
				var data = document.getElementById(id).value;
				console.log(data)
				this.$inertia.post(this.route('users.updatewallet', id), {
					wallet: data,
					_method: "put"
				}).then(function () {
					if (Object.keys(self.errors).length === 0) {
						self.closeModel();
						self.cleanForm();
						self.$toast('User Updated Successfully');
					}
				});
			},
			check(a){
				this.searchfrom.user_id=a
			},
			searchemail(a){
				this.searchfrom.email=a
			},
			searchphone(a){
				this.searchfrom.phone=a
			},
			reset() {
				this.searchfrom = mapValues(this.searchfrom, () => null)
			},
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
				this.modelTitle = 'Create New User';
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
				this.$inertia.post(this.route('users.store'), {
					name: this.form.name
				}).then(function () {
					if (Object.keys(self.errors).length === 0) {
						self.closeModel();
						self.cleanForm();
						self.$toast('User Created Successfully');
					}
				});
			},
			update: function () {
				const self = this;
				this.$inertia.post(this.route('users.update', this.form.id), {
					name: this.form.name,
					status: this.form.status,
					_method: "put"
				}).then(function () {
					if (Object.keys(self.errors).length === 0) {
						self.closeModel();
						self.cleanForm();
						self.$toast('User Updated Successfully');
					}
				});
			},
			remove: async function (user) {
				if (await this.$confirm()) {
					this.$inertia.delete(this.route('users.destroy', user.id));
					this.$toast(`${user.name } deleted successfully`);
				}
			}
		},
	}
</script>

<style>

</style>
