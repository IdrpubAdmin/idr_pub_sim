import Vue from 'vue';
import ProvanceMain from './pages/ProvanceMain';
import './assets/style.scss'

new Vue({
  render: createElement => createElement(ProvanceMain)
}).$mount('#root');