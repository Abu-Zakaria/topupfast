<template>
  <body class="vertical-layout vertical-menu-modern 1-column"
        :class="`${$page.configData.blankPageClass} ${$page.configData.navbarType} ${$page.configData.bodyClass} ${$page.configData.footerType}` + [($page.configData.theme === 'light') ? '' : $page.configData.theme]"
        data-menu="vertical-menu-modern" data-col="1-column">

    <div id="app">
      <!-- BEGIN: Header-->
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <!-- BEGIN: Content-->
      <div class="app-content content">
        <div class="content-wrapper">
          <div class="content-body">
            <slot/>
          </div>
        </div>
      </div>
      <!-- End: Content-->

      <app-footer></app-footer>
    </div>

  </body>
</template>

<script>
    import AppFooter from "./AppFooter";
    export default {
        name: "AuthLayout",
      components: {AppFooter}
    }
</script>

<style>
  .form-control-position {
    position: absolute;
    top: 2px;
    right: 0;
    z-index: 2;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
  .has-icon-left .form-control-position {
    right: auto;
    left: inherit;
  }
  .has-icon-left .form-control-position i {
    position: relative;
    left: 5px;
    color: rgba(34, 41, 47, 0.4);
  }
  .has-icon-left .form-control {
    padding-right: 2rem;
    padding-left: 3rem;
  }
  .position-relative .form-control {
    padding-right: calc(1.25em + 1.4rem + 1px);
  }



  .bg-authentication {
    background-color: #eff2f7;
  }

  .bg-authentication .login-footer {
    padding: 0rem 1.5rem 0.5rem;
  }

  .bg-authentication .login-footer .footer-btn .btn {
    padding: 0.9rem 1.2rem !important;
    margin: 1rem 1rem 1rem 0rem;
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .bg-authentication {
      width: 100%;
    }
  }

</style>
