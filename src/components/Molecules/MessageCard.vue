<template>
  <section class="item">
    <ProfileIcon :image="image" />
    <div class="item-detail">
      <div class="item-name">{{ name }} {{ time }}</div>
      <div class="item-message">
        <nl2br tag="div" :text="message"/>
      </div>
    </div>
  </section>
</template>

<script>
import Nl2br from 'vue-nl2br'
import ProfileIcon from '@/components/Atoms/ProfileIcon'

export default {
  name: 'MessageCard',
  components: {
    Nl2br,
    ProfileIcon
  },
  props: {
    name: String,
    image: String,
    message: String,
    time: String
  }
}
</script>

<style scoped>
.item-detail {
  margin: 0 0 0 1.4em;
}
.item-name {
  font-size: 75%;
}
.item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-right: 12px solid #deefe8;
}
</style>
