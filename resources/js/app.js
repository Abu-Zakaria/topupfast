require('./axios.js')
import { InertiaApp } from "@inertiajs/inertia-vue";
import Vue from "vue";
Vue.use(InertiaApp);

import VueMoment from "vue-moment";
Vue.use(VueMoment);

import ProgressBar from "vue-simple-progress";
Vue.component("progress-bar", ProgressBar);

import Multiselect from "vue-multiselect";
Vue.component("multi-select", Multiselect);

import VueTimepicker from "vue2-timepicker";
Vue.component('vue-timepicker', VueTimepicker);

import datePicker from "vue-bootstrap-datetimepicker";
Vue.use(datePicker);
import ckeditor from "@ckeditor/ckeditor5-vue";
Vue.use(ckeditor);


Vue.config.productionTip = false;

Vue.mixin(require("./mixins/lang"));
Vue.mixin(require('./mixins/access'));
Vue.mixin({ methods: { route: window.route } });

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: toast => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	}
});

Vue.prototype.$confirm = async function(title = "Are you sure?", text = 'You won\'t be able to revert this!') {
	const result = await Swal.fire({
		title: title,
		text: text,
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes!"
	});
	return result.isConfirmed;
};

Vue.prototype.$toast = function(msg, icon = "success") {
	Toast.fire({
		icon: icon,
		title: msg
	});
};

Vue.filter("status", function(value) {
	const className = value == 1 ? "badge-success" : "badge-danger";
	const text = value == 1 ? "Active" : "Inactive";
	return `<span class="badge ${className}">${text}</span>`;
});

const app = document.getElementById("app");

new Vue({
	render: h =>
		h(InertiaApp, {
			props: {
				initialPage: JSON.parse(app.dataset.page),
				resolveComponent: name => import(`@/Pages/${name}`)
			}
		})
}).$mount(app);
