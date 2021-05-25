<template>
<div>
	<footer v-if="$page.configData.mainLayoutType == 'horizontal'" class="footer footer-light navbar-shadow" :class="$page.configData.footerType">
	</footer>
	<footer v-else class="footer footer-light" :class="$page.configData.footerType">
		<p class="clearfix blue-grey lighten-2 mb-0">
			<span class="float-md-left d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2019
				<a class="text-bold-800 grey darken-2" href="http://teammahal.info/" target="_blank">Team Mahal,</a>
				All rights Reserved
			</span>
			<span class="float-md-right d-none d-md-block">Hand-crafted & Made with<i class="feather icon-heart pink"></i></span>
			<button class="btn btn-primary btn-icon scroll-top" type="button"><i class="feather icon-arrow-up"></i></button>
		</p>
	</footer>
</div>
</template>

<script>
		export default {
			name: "AppFooter"
		}
</script>

<style>

</style>
