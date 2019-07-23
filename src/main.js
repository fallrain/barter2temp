import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import '@/lib/veeValidate';
import directives from './directive';
import mixin from './mixin';
import wUtil from '@/lib/util/util';
import { axPost, axGet, axPostJson } from './lib/ajax';

Vue.config.productionTip = false;
Vue.prototype.wUtil = wUtil;
Vue.prototype.axPost = axPost;
Vue.prototype.axPostJson = axPostJson;
Vue.prototype.axGet = axGet;


Object.keys(directives).forEach((name) => {
  Vue.directive(name, directives[name]);
});

// 全局混入
Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
