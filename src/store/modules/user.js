import * as fb from 'firebase'

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser({ commit }, payload) {
      const { email, password } = payload
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.default.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)  
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser({ commit }, payload) {
      const { email, password } = payload
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.default.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)  
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    autoLoginUser({ commit }, user) {
      commit('setUser', new User(user.uid))
    },
    logoutUser({ commit }) {
      fb.default.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isUserLoggedIn(state) {
      return state.user !== null
    }
  }
}