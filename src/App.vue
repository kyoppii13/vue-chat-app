<template>
  <div id="app">
    <NavigationBar @login="handleLogin" @logout="handleLogout" :user="user" />

    <transition-group name="chat" tag="div" class="list content">
      <MessageCard v-for="chat in chatList"
        :key="chat.key"
        :name="chat.name"
        :image="chat.image"
        :message="chat.message"
        :time="chat.time"
      />
    </transition-group>

    <MessageForm :user="user" />

  </div>
</template>

<script>
// import firebase from 'firebase'
// import moment from 'moment'
import NavigationBar from '@/components/Molecules/NavigationBar'
import MessageCard from '@/components/Molecules/MessageCard'
import MessageForm from '@/components/Molecules/MessageForm'
import * as types from '@/store/mutation-types'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    NavigationBar,
    MessageCard,
    MessageForm
  },
  computed: mapState({
    user: state => state.user,
    chatList: state => state.chat
  }),
  created () {
    this.$store.dispatch('checkAuthStateChanged')
  },
  mounted () {
    // TODO: イベント監視にかんして
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === types.SEND) {
        this.scrollBottom()
      }
    })
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('login')
    },
    handleLogout () {
      this.$store.dispatch('logout')
    },
    scrollBottom () {
      // DOM更新後に実行される
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    }
    // 'child_added' function(childSnapshot, prevChildKey) 2番目は順序つけのためのやつ
    /*     doSend () {
      var now = moment()
      if (this.user.uid && this.input.length) {
        firebase.database().ref('message').push({
          message: this.input,
          name: this.user.displayName,
          image: this.user.photoURL,
          time: now.format('HH:mm')
        }, () => {
          this.input = '' // フォームを空に
        })
      }
    } */
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  box-sizing: border-box;
}
.content {
  margin: 0 auto;
  padding: 0 10px;
  max-width: 600px;
}
.list {
  margin-bottom: 100px;
}
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
}
/* トランジション用スタイル */
.chat-enter-active {
  transition: all 1s;
}
.chat-enter {
  opacity: 0;
  transform: translateX(-1em);
}
</style>
