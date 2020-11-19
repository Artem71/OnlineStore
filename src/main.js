import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import '@babel/polyfill'

Vue.use(VueRouter)

Vue.config.productionTip = false
// console.log(fb.default)
new Vue({
  vuetify,
  router,
  store,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyD3z31lQoMSJOaO1-pBQRJvW6MC6SdR8J0",
      authDomain: "onlinestore-71532.firebaseapp.com",
      databaseURL: "https://onlinestore-71532.firebaseio.com",
      projectId: "onlinestore-71532",
      storageBucket: "onlinestore-71532.appspot.com",
      messagingSenderId: "589668332003",
      appId: "1:589668332003:web:b506a48359872ce0fd30d6"
    }
    // Initialize Firebase
    fb.default.initializeApp(firebaseConfig)
    fb.default.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
