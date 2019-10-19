<template>
  <header class="header">
    <h1>nちゃんねる</h1>
    <div v-if="user.uid" key="login">
      [{{ user.displayName }}]
      <ChatButton
        @click="$emit('logout')"
      >
        ログアウト
      </ChatButton>
    </div>
    <div v-else key="logout">
      <ChatButton
        @click="$emit('login')"
      >
        ログイン
      </ChatButton>
    </div>
  </header>
</template>
<script>
import ChatButton from '@/components/atoms/ChatButton.vue'

export default {
  name: 'NavigationBar',
  components: {
    ChatButton
  },
  props: {
    user: Object
  }
}
</script>
<style scoped>
.header {
  background: #3ab383;
  margin-bottom: 1em;
  padding: 0.4em 0.8em;
  color: #fff;
}
</style>
