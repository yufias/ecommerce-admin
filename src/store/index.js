import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    product: [],
    isLogin: localStorage.getItem('access_token')
  },
  mutations: {
    resetProduct(state) {
      state.product = []
    },
    resetLog(state) {
      state.email = ''
      state.password = ''
    },
    setProduct(state, productList) {
      state.product.push(productList)
    },
    setLogin(state, email) {
      state.email = email
    }
  },
  actions: {
    fetch() {
      return axios({
        method: "get",
        url: "https://tranquil-coast-06554.herokuapp.com/admin/product"
      })
    },
    login(context, payload) {
      return axios({
        method: "post",
        url: "https://tranquil-coast-06554.herokuapp.com/admin/login",
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    }
  }
})

export default store
