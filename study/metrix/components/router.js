var DashboardMain = httpVueLoader('components/dashboard/DashboardMain.vue');
var OrdersMain = httpVueLoader('components/orders/OrdersMain.vue');
var CustomersMain = httpVueLoader('components/customers/CustomersMain.vue');
var InventoryMain = httpVueLoader('components/inventory/InventoryMain.vue');
var ConversationsMain = httpVueLoader('components/conversations/ConversationsMain.vue');
var SettingsMain = httpVueLoader('components/settings/SettingsMain.vue');
var HiMain1 = httpVueLoader('components/orders/HiMain1.vue')
var HiMain2 = httpVueLoader('components/orders/HiMain2.vue')
var router = new VueRouter({
	routes: [
	  { path: '/', component: DashboardMain},
	  { path: '/dashboard', component: DashboardMain},
	  { 
        path: '/orders', 
        component: OrdersMain,
        children:[
            {
                name: 'test1',
                path: '',
                component: HiMain1
            },
            {
                name: 'test2',
                path: 'test',
                component: HiMain2
            }
        ],
      },
	  { path: '/customers', component: CustomersMain},
	  { path: '/inventory', component: InventoryMain},
	  { path: '/conversations', component: ConversationsMain},
	  { path: '/settings', component: SettingsMain},
	]
})