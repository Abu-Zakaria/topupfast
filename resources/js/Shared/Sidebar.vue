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
					background-image: url(/images/logo/logo.png);
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
					<inertia-link href="/">
						<i class="feather icon-home"></i>
						<span class="menu-title" data-i18n="">{{ __("Dashboard") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('brand.index')" :class="isUrl('brand') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Brand") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('category.index')" :class="isUrl('category') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Category") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('product.index')" :class="isUrl('product') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Product") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('package.index')" :class="isUrl('package') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Package") }}</span>
					</inertia-link>
				</li>


				<li class="nav-item">
					<inertia-link :href="route('paymentmethod.index')" :class="isUrl('paymentmethod') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Payment Method") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('banner.index')" :class="isUrl('banner') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Banner") }}</span>
					</inertia-link>
				</li>


				<li class="nav-item">
					<inertia-link :href="route('transaction.index')" :class="isUrl('transaction') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Transaction") }}</span>
					</inertia-link>
				</li>


				<li class="nav-item">
					<inertia-link :href="route('order.index')" :class="isUrl('order') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Order") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('invoice.index')" :class="isUrl('invoice') ? 'active' : ''">
						<i class="feather icon-home"></i>
						<span class="menu-title nav-link-text" data-i18n="">{{ __("Invoice") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('users.index')" :class="isUrl('user') ? 'active' : ''">
						<i class="feather icon-users"></i>
						<span class="menu-title" data-i18n="">{{ __("Users") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item">
					<inertia-link :href="route('notice.index')" :class="isUrl('notice') ? 'active' : ''">
						<i class="feather icon-users"></i>
						<span class="menu-title" data-i18n="">{{ __("Notice") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item" v-if="$can('subscription_access')">
					<inertia-link :href="route('subscriptions.index')">
						<i class="feather icon-users"></i>
						<span class="menu-title" data-i18n="">{{
							__("Subscription")
						}}</span>
					</inertia-link>
				</li>
				
				<li class="nav-item" v-if="$can('role_access')">
					<inertia-link :href="route('roles.index')">
						<i class="feather icon-unlock"></i>
						<span class="menu-title" data-i18n="">{{ __("Role") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item" v-if="$can('permission_access')">
					<inertia-link :href="route('permissions.index')">
						<i class="feather icon-unlock"></i>
						<span class="menu-title" data-i18n="">{{ __("Permission") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item" v-if="$can('gender_access')">
					<inertia-link :href="route('genders.index')">
						<i class="feather icon-unlock"></i>
						<span class="menu-title" data-i18n="">{{ __("Gender") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item" v-if="$can('religion_access')">
					<inertia-link :href="route('religions.index')">
						<i class="feather icon-unlock"></i>
						<span class="menu-title" data-i18n="">{{ __("Religion") }}</span>
					</inertia-link>
				</li>

				<li class="nav-item" v-if="$can('blood_group_access')">
					<inertia-link :href="route('blood-groups.index')">
						<i class="feather icon-unlock"></i>
						<span class="menu-title" data-i18n="">{{ __("Blood Group") }}</span>
					</inertia-link>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	props: {
	    url: String,
	},
	methods: {
	    isUrl(...urls) {
	      if (urls[0] === '') {
	        return this.url === ''
	      }

	      return urls.filter(url => this.url.startsWith(url)).length
	    },
	},
};
</script>

<style>
</style>
