// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/zarm-vue.default.css'

import { Button, Alert, Input, Confirm, Cell, Panel, PanelHeader, PanelBody, Select, Toast, Icon, Modal, Checkbox, Spinner, Loading, Pull, Accordion, AccordionItem } from 'zarm-vue'
Vue.use(Button)
Vue.use(Alert)
Vue.use(Input)
Vue.use(Confirm)
Vue.use(Cell)
Vue.use(Panel)
Vue.use(PanelHeader)
Vue.use(PanelBody)
Vue.use(Select)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Modal)
Vue.use(Checkbox)
Vue.use(Spinner)
Vue.use(Loading)
Vue.use(Pull)
Vue.use(Accordion)
Vue.use(AccordionItem)
Vue.prototype.$zaToast = Toast.root
Vue.prototype.$zaLoading = Loading.root
Vue.prototype.$zaAlert = Alert.root
Vue.prototype.$zaConfirm = Confirm.root

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
