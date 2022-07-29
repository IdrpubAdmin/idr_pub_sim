import Vue from 'vue';
import router from './router';
import ProvanceMain from './ProvanceMain';
import './assets/style.scss'


new Vue({
  router,
  render: createElement => createElement(ProvanceMain),
}).$mount('#root');
