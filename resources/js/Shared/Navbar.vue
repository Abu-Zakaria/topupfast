<template>
<div>
	<nav v-if="$page.configData.mainLayoutType == 'horizontal'"
		class="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed"
		:class="$page.configData.navbarColor">
		<div class="navbar-header d-xl-block d-none">
			<ul class="nav navbar-nav flex-row">
				<li class="nav-item"><a class="navbar-brand" href="dashboard-analytics">
					<div class="brand-logo"></div></a></li>
			</ul>
		</div>
	</nav>
	
	<nav v-else class="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-light navbar-shadow"
		:class="`${$page.configData.navbarClass} ${$page.configData.navbarColor}`">
		<div class="navbar-wrapper">
			<div class="navbar-container content">
				<div class="navbar-collapse" id="navbar-mobile">
					<div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
						<ul class="nav navbar-nav">
							<li class="nav-item mobile-menu d-xl-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ficon feather icon-menu"></i></a></li>
						</ul>
						<ul class="nav navbar-nav">
							<li class="nav-item d-none d-lg-block app-title" v-if="$page.app"><a class="bookmark-star"><i class="ficon feather icon-star warning"></i> {{ $page.app ? $page.app.name : '' }}</a>
								<div class="bookmark-input search-input">
									<div class="bookmark-input-icon"><i class="feather icon-search primary"></i></div>
									<input class="form-control input" type="text" placeholder="Explore Vuexy..." tabindex="0" data-search="laravel-starter-list" />
									<ul class="search-list search-list-bookmark"></ul>
								</div>
							</li>
						</ul>
					</div>
					<ul class="nav navbar-nav float-right">
						<li class="dropdown dropdown-language nav-item">
							<a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span class="selected-language">{{ currentLanguage() }}</span>
							</a>
							<div class="dropdown-menu" aria-labelledby="dropdown-flag">
								<inertia-link class="dropdown-item" :href="`${ current() }?lang=en`" data-language="en"> English</inertia-link>
								<inertia-link class="dropdown-item" :href="`${ current() }?lang=bn`" data-language="bn"> বাংলা</inertia-link>
							</div>
						</li>
						<li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand"><i class="ficon feather icon-maximize"></i></a></li>
						<li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="ficon feather icon-bell"></i><span class="badge badge-pill badge-primary badge-up">5</span></a>
							<ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
								<li class="dropdown-menu-header">
									<div class="dropdown-header m-0 p-2">
										<h3 class="white">5 New</h3><span class="grey darken-2">App Notifications</span>
									</div>
								</li>
								<li class="scrollable-container media-list">
									<a class="d-flex justify-content-between" href="javascript:void(0)">
										<div class="media d-flex align-items-start">
											<div class="media-left">
												<i class="feather icon-download-cloud font-medium-5 success"></i>
												</div>
											<div class="media-body">
												<h6 class="success media-heading red darken-1">99% Server load</h6>
												<small class="notification-text">You got new order of goods.</small>
											</div>
											<small>
											<time class="media-meta" datetime="2015-06-11T18:29:20+08:00">5 hour ago</time></small>
										</div>
									</a>
								</li>
								<li class="dropdown-menu-footer"><a class="dropdown-item p-1 text-center" href="javascript:void(0)">Read all notifications</a></li>
							</ul>
						</li>
						<li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
							<div class="user-nav d-sm-flex d-none"><span class="user-name text-bold-600">{{ $page.auth.name }}</span></div>
							<span><img class="round" src="/images/profile/user-uploads/user-09.jpg" alt="avatar" height="40" width="40" /></span>
						</a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" :href="route('users.show', $page.auth.slug)">
									<i class="feather icon-user"></i> Profile
								</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" @click="logout"><i class="feather icon-power"></i> Logout</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</div>
</template>

<script>
	export default {
		name: "Navbar",
		methods: {
			logout: function () {
				this.$inertia.post(this.route('logout'));
			}
		}
	}
</script>
