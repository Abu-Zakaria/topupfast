<template>
<div id="app">
	<!--    Include sidebar-->
	<sidebar :url='url()'></sidebar>
	<!-- BEGIN: Content-->
	<div class="app-content content">
		<!-- BEGIN: Header-->
		<div class="content-overlay"></div>
		<div class="header-navbar-shadow"></div>
			<!--      Include Navbar-->
			<navbar></navbar>
			<div class="content-area-wrapper" v-if="$page.configData.contentLayout">
				<div :class="$page.configData.sidebarPositionClass">
					<div class="sidebar">
						<!-- get content sidebar data-->
						<slot />
					</div>
				</div>
				<div :class="$page.configData.contentsidebarClass">
					<div class="content-wrapper">
						<div class="content-body">
							<slot />
						</div>
					</div>
				</div>
			</div>
			<div class="content-wrapper" v-else>
				<div v-if="$page.configData.pageHeader == true">
					<!-- Include Breadcrumb -->
					<breadcrumb></breadcrumb>
				</div>

				<div class="content-body">
					<!-- Include Page Content-->
					<slot />
				</div>
			</div>
		</div>
		<!-- End: Content-->
	<div class="sidenav-overlay"></div>
	<div class="drag-target"></div>
	<!--    include footer-->
	<app-footer></app-footer>
</div>
</template>

<script>
		import Sidebar from "./Sidebar";
		import Navbar from "./Navbar";
		import AppFooter from "./AppFooter";
		import Breadcrumb from "./Breadcrumb";
		export default {
			name: "Layout",
			components: {Breadcrumb, AppFooter, Navbar, Sidebar},
			created() {

			},
			methods: {
				url() {
					return location.pathname.substr(1)
				},
				hideDropdownMenus() {
					this.showUserMenu = false
				},
			},
		}
</script>

<style>

</style>
