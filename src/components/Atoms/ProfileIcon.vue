<template>
  <div :class="classes"><img :src="image" :width="imgSize" :height="imgSize" :class="{ 'border-radius': imgSize/2 }"></div>
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    image: {
      type: String
    },
    imgSize: {
      type: Number,
      default: 40
    }
  },
  computed: {
    classes () {
      return ['item-image']
    }

  }
}
</script>

<style scoped>
.item-image img {
  vertical-align: top;
}
</style>
