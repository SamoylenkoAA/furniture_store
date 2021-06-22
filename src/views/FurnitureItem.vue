<template>
  <b-card
      :img-src="img(item.preview_img)"
      img-height="300"
      img-alt="Image"
      img-top
      footer-tag="footer"
      :footer="item.price + ' $'"
      style="height: 29rem"
      class="mb-4"
  >
    <b-card-title style="font-size: 18px">{{item.name}}</b-card-title>
    <b-card-text class="small text-muted">{{item.type}}</b-card-text>
    <b-card-text>Header and footers using props.</b-card-text>
    <b-button href="#" variant="primary">Добавить в корзину</b-button>
  </b-card>
</template>

<script>
export default {
  name: "FurnitureItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    img(img){
      return img !== '//planhome.online' ? img : "https://xn--90aha1bhcc.xn--p1ai/img/placeholder.png"
    }
  }
}
</script>

<style scoped>

</style>