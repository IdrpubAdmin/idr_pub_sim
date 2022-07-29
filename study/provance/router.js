import Vue from 'vue';
import VueRouter from 'vue-router';
import ProvanceMainContent from './pages/ProvanceMainContent';
import ProvanceAbout from './pages/ProvanceAbout';
import ProvanceVillage from './pages/ProvanceVillage';
import ProvanceTower from './pages/ProvanceTower';
import ProvanceTheme from './pages/ProvanceTheme';
import ProvanceCustomer from './pages/ProvanceCustomer';
import ProvanceSitemap from './pages/ProvanceSitemap';


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: ProvanceMainContent },
        { path: '/about', component: ProvanceAbout },
        { path: '/village', component: ProvanceVillage },
        { path: '/tower', component: ProvanceTower },
        { path: '/theme', component: ProvanceTheme },
        { path: '/customer', component: ProvanceCustomer },
        { path: '/sitemap', component: ProvanceSitemap },
    ],
})

export default router