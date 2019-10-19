<template>
  <form action="" @submit.prevent="handleSend" class="form">
    <textarea
      v-model="input"
      :disabled="!user.uid"
      ></textarea>
      <ChatButton type="submit" :disabled="!user.uid" @click.prevent="handleSend">
        Send
      </ChatButton>
  </form>
</template>

<script>
import ChatButton from '@/components/Atoms/ChatButton'
import * as types from '@/store/mutation-types'

export default {
  name: 'MessageForm',
  data () {
    return {
      input: ''
    }
  },
  props: {
    user: {
      type: Object
    }
  },
  mounted () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === types.SEND) {
        this.input = ''
      }
    })
  },
  components: {
    ChatButton
  },
  methods: {
    handleSend () {
      this.$store.dispatch('send', {input: this.input})
    }
  }
}
</script>

<style scoped>
.form {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 80px;
  width: 100%;
  background: #f5f5f5;
}
.form textarea {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 4em;
  width: calc(100% - 6em);
  resize: none;
}
</style>
