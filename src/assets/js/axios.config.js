// import Vue from 'vue'
// import axios from 'axios'

// axios.defaults.baseURL = 'http://api.imooc.hybrid.lgdsunday.club/'

// axios.interceptors.request.use(function (config) {
//   console.log('进入页面')
//   if (config.params) {
//     config.params.token = 'bf4f7c10-7675-11ea-80c9-8daaf3845cc5'
//   } else {
//     config.params = {
//       token: 'bf4f7c10-7675-11ea-80c9-8daaf3845cc5'
//     }
//   }
//   return config
// })

// axios.interceptors.request.use((response) => {
// //   统一处理数据
//   return response.dada
// }, (error) => {
//   return Promise.reject(error)
// })

// Vue.prototype.$http = axios

// axios 配置
import Vue from 'vue'
import axios from 'axios'

// 设置 axios 请求 baseUrl
axios.defaults.baseURL = 'http://api.imooc.hybrid.lgdsunday.club/'

/**
 * 设置拦截器，interceptors 响应处理，
 * 所有使用 axios 发送的请求，在请求发送出去之前，都会进入到方法中
 * 在这里，为所有请求添加上 token 。
 */
axios.interceptors.request.use(function (config) {
  // config.url = '/api' + config.url;

  // 当请求中存在 params 的时候，为 params 新增 token 字段
  if (config.params) {
    config.params.token = 'bf4f7c10-7675-11ea-80c9-8daaf3845cc5'
  } else {
  // 当请求不存在 params 的时候，为它设置 params 对象
    config.params = {
      token: 'bf4f7c10-7675-11ea-80c9-8daaf3845cc5'
    }
  }

  // 返回配置的 config
  return config
})

/**
 * 设置拦截器，interceptors 响应处理，
 * 所有使用 axios 的请求响应，都会优先回调到拦截器中
 * 在正确的返回情况下，数据会优先进入第一个回调方法
 * 在请求错误的情况下，错误会进入第二个回调方法
 */
axios.interceptors.response.use((response) => {
  //  统一处理数据，使组件中的请求只获取到需要的业务数据，
  // 而不需要去关注返回的状态码等与业务无关的数据

  return response.data.data
}, (error) => {
  // 处理错误的响应
  return Promise.reject(error)
})

//  绑定到 vue 原型中，组件中 ： this.$http -> axios 。
Vue.prototype.$http = axios
