import * as types from './mutation-types'
import firebase from 'firebase'
import moment from 'moment'

export default {
  [types.AUTH_LOGIN] (state, payload) {

  },
  [types.AUTH_LOGOUT] (state) {

  },
  [types.SEND] (state, payload) {
    const now = moment()
    if (state.user.uid && payload.input.length) {
      firebase.database().ref('message').push({
        message: payload.input,
        name: state.user.displayName,
        image: state.user.photoURL,
        time: now.format('HH:mm')
      })
      // , () => {
      //   // state.payload.input = '' // フォームを空に
      // })
    }
  },
  [types.AUTH_STATE] (state, payload) {
    // 分割代入
    const { uid, displayName, photoURL } = payload.user
    state.user = { uid, displayName, photoURL }
    const refMessage = firebase.database().ref('message')

    function childAdded (snap) {
      const message = snap.val()
      state.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: message.message,
        time: message.time
      })
    }

    if (state.user) {
      state.chat = []
      // データの変更をリッスン．今回は追加された場合
      refMessage.limitToLast(10).on('child_added', childAdded)
    } else {
      refMessage.limitToLast(10).off('child_added', childAdded)
    }
  }
}
