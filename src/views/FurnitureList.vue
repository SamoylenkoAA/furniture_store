<template>
    <b-row>
      <b-col
        xl="4"
        lg="4"
        sm="6"
        xs="12"
        v-for="(item, i) in items" :key="i"
      >
        <furniture-item :item="item" />
      </b-col>
      <b-col cols="12">
        <div class="mt-3 d-flex justify-content-center">
          <b-pagination v-model="currentPage" :total-rows="total_rows" :per-page="per_page" size="lg"></b-pagination>
        </div>
      </b-col>
    </b-row>
</template>

<script>
import FurnitureItem from "@/views/FurnitureItem";
import {mapGetters} from "vuex";

export default {
  name: "FurnitureList",
  props: {
    items: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    FurnitureItem
  },
  computed: {
    ...mapGetters(["current", "per_page", "total_rows"]),
    currentPage: {
      get(){
        return this.current
      },
      set(val){
        this.$store.commit('setCurrent', val)
      }
    }
  },
}
</script>

<style scoped>

</style>