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
				                <th>SN</th>
				                <th>Name</th>
				                <th>Buy Price</th>
				                <th>Sale Price</th>
				                <th>Seller Commission</th>
				                <th>Is shop</th>
				                <th>Type</th>
				                <th>Tag line</th>
								 <th>Logo</th>
				                <th>Action</th>
				            </tr>
				            </thead>
				            <tr v-for="(row , index) in product.data" :key="index">
				                <td>{{ index+1 }}</td>
				                <td>{{ row.name }}</td>
				                <td>{{ row.buy_price }}</td>
				                <td>{{ row.sale_price }}</td>
				                <td>{{ row.seller_commission }}</td>
				                <td>{{ row.is_shop }}</td>
				                <td>{{ row.type }}</td>
				                <td>{{ row.tag_line }}</td>
								<td><img :src="'products/'+row.logo" alt="opps" style="height:50px;width:auto;"></td>
				                <td width="200">
				                    <button @click="edit(row)" class="btn btn-sm btn-primary">Edit</button>
				                    <button @click="deleteRow(row)" class="btn btn-sm btn-danger">Del</button>
				                </td>
				            </tr>
				        </table>

				        <pagination :links="product.links"></pagination>

				        <div class="modal fade" id="modal">
				            <div class="modal-dialog modal-lg" style="width: 7000px!important">

				                <div class="modal-content">
				                    <div class="modal-header">
				                        <h4 class="modal-title">New Product</h4>
				                    </div>
				                    <div class="modal-body">

				                    	<div class="row">
				                    		<div class="col-md-6">
						                        <div class="form-group">
						                            <label for="name"><b>Name</b></label>
						                            <input class="form-control"  :class="[errors.name ? 'is-invalid' : '']" required id="name" placeholder="Name" v-model="form.name"/>
						                             <span
								                          v-if="errors.name"
								                          class="invalid-feedback"
								                          role="alert"
								                        >
								                          <strong>{{ errors.name[0] }}</strong>
								                        </span>
						                        </div>

						                       <div class="form-group">
						                        	<label for="name"><b>Category</b></label>
						                            <select v-model="form.category_id" :error="errors.category_id" class="form-control">
											            <option :value="null" />
											            <option v-for="row in category" :value="row.id">{{ row.name }}</option>
											        </select>
						                        </div>


						                        <div class="form-group">
						                            <label for="name"><b>sale_price</b></label>
						                            <input class="form-control"  :class="[errors.sale_price ? 'is-invalid' : '']" required id="name" placeholder="sale_price" v-model="form.sale_price"/>
						                             <span
								                          v-if="errors.sale_price"
								                          class="invalid-feedback"
								                          role="alert"
								                        >
								                          <strong>{{ errors.sale_price[0] }}</strong>
								                        </span>
						                        </div>

						                        <div class="form-group">
						                            <label for="name"><b>quantity</b></label>
						                            <input class="form-control"  :class="[errors.quantity ? 'is-invalid' : '']" required id="name" placeholder="quantity" v-model="form.quantity"/>
						                             <span
								                          v-if="errors.quantity"
								                          class="invalid-feedback"
								                          role="alert"
								                        >
								                          <strong>{{ errors.quantity[0] }}</strong>
								                        </span>
						                        </div>

						                        <div class="form-group">
						                            <label for="logo"><b>Logo</b></label>
						                            <input type="file" @change="setLogo" accept="image/*"  class="form-control"  :class="[errors.logo ? 'is-invalid' : '']" required id="logo" name="logo"/>
						                             <span
								                          v-if="errors.logo"
								                          class="invalid-feedback"
								                          role="alert"
								                        >
								                          <strong>{{ errors.logo[0] }}</strong>
								                        </span>
						                        </div>

                                    <div class="form-group">
                                      <label for="name"><b>Seller Commission</b></label>
                                      <input class="form-control" required id="seller_commission" placeholder="Enter Seller Commission" v-model="form.seller_commission"/>
                                    </div>
				                    		</div>


				                    		<div class="col-md-6">
				                    			<div class="form-group">
						                        	<label for="name"><b>Brand</b></label>
						                            <select v-model="form.brand_id" :error="errors.brand_id" class="form-control">
                                            <option :value="null" />
                                            <option v-for="row in brand" :value="row.id">{{ row.name }}</option>
                                        </select>
						                        </div>

						                        <div class="form-group">
						                            <label for="name"><b>Tag_line</b></label>
						                            <input class="form-control"  :class="[errors.tag_line ? 'is-invalid' : '']" required id="name" placeholder="tag_line" v-model="form.tag_line"/>
						                             <span
								                          v-if="errors.tag_line"
								                          class="invalid-feedback"
								                          role="alert"
								                        >
								                          <strong>{{ errors.tag_line[0] }}</strong>
								                        </span>
						                        </div>

						                        <div class="form-group">
						                            <label for="name"><b>buy_price</b></label>
						                            <input class="form-control"  :class="[errors.buy_price ? 'is-invalid' : '']" required id="name" placeholder="buy_price" v-model="form.buy_price"/>
						                             <span
								                          v-if="errors.buy_price"
								                          class="invalid-feedback"
								                          role="alert"
								                        >
								                          <strong>{{ errors.buy_price[0] }}</strong>
								                        </span>
						                        </div>

						                        <div class="form-group">
						                        	<label for="name"><b>is_shop</b></label>
						                            <select v-model="form.is_shop" :error="errors.is_shop" class="form-control">
											            <option :value="null" />
											            <option value="0">Is Shop</option>
											            <option value="1">Is Top Up</option>
											            <option value="2">Disabled</option>
											        </select>
						                        </div>

						                       <div class="form-group">
						                        	<label for="name"><b>type</b></label>
						                            <select v-model="form.type" :error="errors.type" class="form-control">
											            <option :value="null" />
											            <option value="0">In Game</option>
											            <option value="1">ID CODE</option>
											        </select>
						                        </div>
				                    		</div>

				                    	</div>

				                        <div class="form-group">
				                            <label for="name"><b>Description</b></label>
				                            <ckeditor
								              tag-name="textarea"
								              ref="cktext"
								              :editor="editor"
								              v-model="form.description"
								            ></ckeditor>
				                             <span
						                          v-if="errors.description"
						                          class="invalid-feedback"
						                          role="alert"
						                        >
						                          <strong>{{ errors.description[0] }}</strong>
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
	import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
	import Layout from "../../Shared/Layout";
	import Pagination from './../../Shared/Pagination';
	export default {
		name: "Product",
		components: {Layout,Pagination,ClassicEditor},
		props: {
	      msg: String,
	      product: Object,
	      brand: Array,
	      category: Array,
	      success: String,
	      errors: Object
	    },
        data() {
            return {
                editMode: false,
                editor: ClassicEditor,
                content:null,
                form: {
                    name: null,
                    brand_id: null,
                    category_id: null,
                    description: null,
                    tag_line: null,
                    logo: null,
                    buy_price: null,
                    sale_price: null,
                    is_shop: null,
                    type: null,
                    quantity: null,
                    seller_commission: null,
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
                    name: null,
                    brand_id: null,
                    category_id: null,
                    description: null,
                    tag_line: null,
                    logo: null,
                    buy_price: null,
                    sale_price: null,
                    is_shop: null,
                    type: null,
                    quantity: null,
                    seller_commission: null,
                }
            },
            save: function (data) {
				var formData = new FormData();
				formData.append("name", data.name);
				formData.append("brand_id", data.brand_id);
				formData.append("category_id", data.category_id);
				formData.append("description", data.description);
				formData.append("tag_line", data.tag_line);
				formData.append("buy_price", data.buy_price);
				formData.append("sale_price", data.sale_price);
				formData.append("is_shop", data.is_shop);
				formData.append("type", data.type);
				formData.append("quantity", data.quantity);
				formData.append("seller_commission", data.seller_commission);
				formData.append("logo", data.logo);
                this.$inertia.post('/product', formData)
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
				formData.append("name", data.name);
				formData.append("brand_id", data.brand_id);
				formData.append("category_id", data.category_id);
				formData.append("description", data.description);
				formData.append("tag_line", data.tag_line);
				formData.append("buy_price", data.buy_price);
				formData.append("sale_price", data.sale_price);
				formData.append("is_shop", data.is_shop);
				formData.append("type", data.type);
				formData.append("quantity", data.quantity);
				formData.append("seller_commission", data.seller_commission);
				formData.append("logo", data.logo);
				formData.append("_method", 'PUT');
                this.$inertia.post('/product/' + data.id, formData)
                this.reset();
                this.closeModal();
            },
            deleteRow: function (data) {
                if (!confirm('Sure')) return;
                data._method = 'DELETE';
                this.$inertia.post('/product/' + data.id, data)
                this.reset();
                this.closeModal();
            }
        }
    }
</script>

<style>
</style>
