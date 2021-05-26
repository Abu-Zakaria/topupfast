<template>
  <Layout name="sms">
    <section class="users-list-wrapper">
      <section id="basic-examples">
        <div class="card">
          <div class="card-content">
            <div class="card-body">

              <div v-if="success" class="alert alert-success">
                {{ success }}
              </div>

            </div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
import Layout from "../../Shared/Layout";
export default {
  name: "Index",
  components: {Layout},
  props: {
    msg: String,
    success: String,
    errors: Object,
  },
}
</script>

<style scoped>

</style>
