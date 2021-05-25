<template>
  <div class="alert alert-dismissible fade show" :class="alertClass" role="alert">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Alert",
        props: {
          alertClass: {
            type: String,
            default: 'alert-primary',
            required: false
          }
        }
    }
</script>

<style>

</style>
