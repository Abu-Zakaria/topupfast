<template>
	<div
		class="main-menu menu-accordion menu-shadow"
		data-scroll-to-active="true"
		:class="
			$page.configData.menuType +
			' ' +
			[$page.configData.theme === 'light' ? 'menu-light' : 'menu-dark']
		"
	>
		<div class="navbar-header">
			<ul
				class="nav navbar-nav flex-row"
				style="
					background-image: url(/images/logo/logo.jpeg);
					background-size: contain;
					background-repeat: no-repeat;
				"
			>
				<li class="nav-item mr-auto">
					<inertia-link class="navbar-brand" href="/dashboard"> </inertia-link>
				</li>
				<li class="nav-item nav-toggle">
					<a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"
						><i
							class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
						></i
						><i
							class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block primary collapse-toggle-icon"
							data-ticon="icon-disc"
						></i
					></a>
				</li>
			</ul>
		</div>
		<div class="shadow-bottom"></div>
		<div class="main-menu-content">
			<ul
				class="navigation navigation-main"
				id="main-menu-navigation"
				data-menu="menu-navigation"
			>
				<li class="nav-item">
					<inertia-link href="/dashboard">
						<i class="feather icon-home"></i>
						<span class="menu-title" data-i18n="">{{ __("Dashboard") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('users.index')">
						<i class="feather icon-users"></i>
						<span class="menu-title" data-i18n="">{{ __("Users") }}</span>
					</inertia-link>
				</li>

				<li class="navigation-header">
					<span>Setup</span>
				</li>
				<li class="nav-item" v-if="$can('branch_access')">
					<inertia-link :href="route('shops.branches.index')">
						<i class="feather icon-unlock"></i>
						<span class="menu-title" data-i18n="">{{ __("Branchs") }}</span>
					</inertia-link>
				</li>
				<li class="nav-item" v-if="$can('customer_access')">
					<inertia-link :href="route('customers.index')">
						<i class="feather icon-unlock"></i>
						<span class="menu-title" data-i18n="">{{ __("Customers") }}</span>
					</inertia-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
};
</script>

<style>
</style>
