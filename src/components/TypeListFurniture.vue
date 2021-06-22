<template>
  <div>
    <b-form-select
        v-model="selected"
        :options="options"
        style="width: 100%"
    >
    </b-form-select>
    <div class="mt-3 mb-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
export default {
  name: "TypeListFurniture",
  props: {
    options: {
      type: Array,
      default: () => {}
    }
  },
  data: () => ({
    type: 1,
  }),
  computed: {
    selected: {
      get(){
        return this.type
      },
      set(val){
        this.type = val
        this.$store.commit('setFilter', val)
      }
    }
  }
}
</script>

<style scoped>

</style>