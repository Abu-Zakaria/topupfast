<template>
  <div class="modal fade text-left" id="default" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" :class="size" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Model",
        props: {
          size: {
            type: String,
            default: ''
          }
        }
    }
</script>

<style>

</style>
