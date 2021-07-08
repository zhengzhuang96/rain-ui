/*
 * @Author: zhengzhuang
 * @Date: 2021-07-07 17:37:24
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-07 17:37:45
 * @Description: In User Settings Edit
 * @FilePath: /rain-ui/packages/index.js
 */
import RainButton from './rain-button'
// 所有组件列表
const components = [
  RainButton
]
// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components
}
