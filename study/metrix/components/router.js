var DashboardMain = httpVueLoader('components/dashboard/DashboardMain.vue');

var OrdersMain = httpVueLoader('components/orders/OrdersMain.vue');
var OrdersSummary = httpVueLoader('components/orders/OrdersSummary.vue')
var ViewOrder = httpVueLoader('components/orders/ViewOrder.vue')

var CustomersMain = httpVueLoader('components/customers/CustomersMain.vue');
var CustomersSummary = httpVueLoader('components/customers/CustomersSummary.vue')
var ViewCustomer = httpVueLoader('components/customers/ViewCustomer.vue')

var InventoryMain = httpVueLoader('components/inventory/InventoryMain.vue');
var ConversationsMain = httpVueLoader('components/conversations/ConversationsMain.vue');

var SettingsMain = httpVueLoader('components/settings/SettingsMain.vue');
var SettingsAccount = httpVueLoader('components/settings/SettingsAccount.vue');
var SettingsBusiness = httpVueLoader('components/settings/SettingsBusiness.vue');
var SettingsSecurity = httpVueLoader('components/settings/SettingsSecurity.vue');

var LogIn = httpVueLoader('components/common/LogIn.vue');
var SignUp = httpVueLoader('components/common/SignUp.vue');

var SelectBox = httpVueLoader('components/common/SelectBox.vue')

var router = new VueRouter({
	routes: [
    { 
      name: 'login',
      path: '/login', 
      component: LogIn,
      meta: {
        title: 'Auth'
      },
    },
    { 
      name: 'signup',
      path: '/signup', 
      component: SignUp,
      meta: {
        title: 'Auth'
      },
    },
	  { 
      name: 'dashboard',
      path: '/', 
      component: DashboardMain, 
      meta: {
        title: 'Dashboard'
      },
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
              component: OrdersSummary,
              meta: {
                title: 'Orders'
              },
          },
          {
              name: 'vieworder',
              path: 'vieworder',
              component: ViewOrder,
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
      children:[
        {
            name: 'customersmain',
            path: '',
            component: CustomersSummary,
            meta: {
              title: 'Customers'
            },
        },
        {
            name: 'viewcustomer',
            path: 'viewcustomer',
            component: ViewCustomer,
            meta: {
              title: 'Customers'
            },
        }
      ],
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
      redirect:'/'
    },
	  { 
      name: 'settings',
      path: '/settings', 
      component: SettingsMain,
      meta: {
        title: 'Settings'
      },
      children:[
        {
          name: 'account',
          path: '',
          component: SettingsAccount,
          meta: {
            title: 'Setting'
          },
        },
        {
          name: 'business',
          path: 'business',
          component: SettingsBusiness,
          meta: {
            title: 'Setting'
          },
          redirect:{name:'account'}
        },
        {
          name: 'security',
          path: 'security',
          component: SettingsSecurity,
          meta: {
            title: 'Setting'
          },
          redirect:{name:'account'}
        }
      ],
    },
	]
})
