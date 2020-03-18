// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Field } from 'vant';
import { Button } from 'vant';
import { Dialog } from 'vant';
import { Toast } from 'vant';
import { Notify } from 'vant';
import { NumberKeyboard } from 'vant';
import '@vant/touch-emulator';
import "./assets/css/vantChange.css"


Vue.use(Field);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Notify);
Vue.use(NumberKeyboard);


Vue.prototype.$dialog=Dialog
Vue.prototype.$toast=Toast



Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
