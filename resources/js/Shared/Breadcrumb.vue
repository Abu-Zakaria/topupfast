<template>
  <div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
      <div class="row breadcrumbs-top">
        <div class="col-12">
          <h2 class="content-header-title float-left mb-0"></h2>
          <div class="breadcrumb-wrapper col-12">
            <ol v-if="$page.breadcrumbs" class="breadcrumb">
              <li v-for="breadcrumb in $page.breadcrumbs" class="breadcrumb-item">
                <inertia-link v-if="breadcrumb.link" :href="breadcrumb.link">
                  {{ breadcrumb.name }}
                </inertia-link>
                <span v-else>{{ breadcrumb.name }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$page.has_modal" class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
      <button class="btn-icon waves-effect waves-light btn btn-primary btn-sm" data-toggle="modal" data-target="#default" type="button">
        <i class="feather icon-plus-circle"></i> New
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Breadcrumb",
    }
</script>

<style>

</style>
