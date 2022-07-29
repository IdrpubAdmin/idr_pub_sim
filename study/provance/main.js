import Vue from 'vue';
<<<<<<< HEAD
import router from './router';
import ProvanceMain from './ProvanceMain';
import './assets/style.scss'


new Vue({
  router,
  render: createElement => createElement(ProvanceMain),
}).$mount('#root');
=======
import ProvanceMain from './pages/ProvanceMain';
import './assets/style.scss'

new Vue({
  render: createElement => createElement(ProvanceMain)
}).$mount('#root');
>>>>>>> 507a7d3c582b946bce7bb3409eaa0d1dce9410cf
