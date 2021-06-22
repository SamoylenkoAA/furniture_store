<template>
  <b-container fluid="xl" class="bv-example-row mt-5">
    <spinner :show="spinner">
      <b-row>
        <b-col cols="12">
          <type-list-furniture :options="typeFurniture" />
        </b-col>
        <b-col cols="12">
          <furniture-list :items="furniture" />
        </b-col>
    </b-row>
    </spinner>
  </b-container>
</template>

<script>
import FurnitureList from "@/views/FurnitureList";
import Spinner from "@/components/Spinner";
import TypeListFurniture from "@/components/TypeListFurniture";
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    FurnitureList,
    Spinner,
    TypeListFurniture
  },
  data: () => ({
    spinner: true
  }),
  computed: {
    ...mapGetters(['furniture', 'typeFurniture'])
  },
  created() {
    this.$store.dispatch('loadFurniture').then(() => {
      this.spinner = false
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
