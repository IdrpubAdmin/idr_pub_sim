var DashboardMain = httpVueLoader('components/dashboard/DashboardMain.vue');

var LogIn = httpVueLoader('components/common/LogIn.vue');
var SignUp = httpVueLoader('components/common/SingUp.vue');

var OrdersMain = httpVueLoader('components/orders/OrdersMain.vue');
var CustomersMain = httpVueLoader('components/customers/CustomersMain.vue');
var InventoryMain = httpVueLoader('components/inventory/InventoryMain.vue');
var ConversationsMain = httpVueLoader('components/conversations/ConversationsMain.vue');
var SettingsMain = httpVueLoader('components/settings/SettingsMain.vue');
var HiMain1 = httpVueLoader('components/orders/HiMain1.vue')
var HiMain2 = httpVueLoader('components/orders/HiMain2.vue')
var router = new VueRouter({
	routes: [
	  { 
      name: 'dashboard',
      path: '/', 
      component: DashboardMain, 
      meta: {
        title: 'Dashboard'
      },
      // redirect: '/login'
      // beforeEnter: (to, from, next) => {
      //   if(store.state.login === false){
      //     next({
      //       path: '/login'
      //     })
      //   }else{
      //     next()
      //   }
      // }
    },
	  { 
      name: 'dashboard',
      path: '/dashboard', 
      component: DashboardMain,
      meta: {
       title: 'Dashboard'
      },
    },
	  { 
      name: 'orders',
      path: '/orders', 
      component: OrdersMain,
      meta: {
        title: 'Orders'
      },
      children:[
          {
              name: 'ordersmain',
              path: '',
              component: HiMain1,
              meta: {
                title: 'Orders'
              },
          },
          {
              name: 'vieworder',
              path: 'vieworder',
              component: HiMain2,
              meta: {
                title: 'Orders'
              },
          }
        ],
      },
	  { 
      name: 'customers',
      path: '/customers', 
      component: CustomersMain,
      meta: {
        title: 'Customers'
      },
    },
	  { 
      name: 'inventory',
      path: '/inventory', 
      component: InventoryMain,
      meta: {
        title: 'Inventory'
      },
    },
	  { 
      name: 'conversations',
      path: '/conversations', 
      component: ConversationsMain,
      meta: {
        title: 'Conversations'
      },
    },
	  { 
      name: 'settings',
      path: '/settings', 
      component: SettingsMain,
      meta: {
        title: 'Settings'
      },
    },
	]
})
