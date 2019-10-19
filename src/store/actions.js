import * as types from './mutation-types'
import firebase from 'firebase'

export default {
  login: ({ commit }) => {
    // Twitter認証でログイン
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout: ({ commit }) => {
    firebase.auth().signOut()
  },
  checkAuthStateChanged: ({ commit }) => {
    // ログイン状態の確認
    // 現在ログインしているユーザの取得
    firebase.auth().onAuthStateChanged(user => {
      user = user || {}
      commit(types.AUTH_STATE, { user: user })
    })
  },
  send: ({ commit }, payload) => {
    commit(types.SEND, payload)
  }
}
