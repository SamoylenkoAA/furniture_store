<template>
  <div>
    <div class="d-flex justify-content-center align-items-center mb-3" style="height: 90vh" v-if="show">
      <b-button variant="primary" disabled>
        <b-spinner small></b-spinner>
        <span class="sr-only">Loading...</span>
      </b-button>
    </div>
    <slot v-if="!show"></slot>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>