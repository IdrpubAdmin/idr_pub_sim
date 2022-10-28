var navigationData = {
    namespaced: true,
    state: {
        categoryData : [
            { id: 1, title: 'Dashboard', icon: 'Category', path: '/'},
            { id: 2, title: 'Orders', icon: 'Bag', path: '/orders', push: {alarm : 3, class: 'order'} },
            { id: 3, title: 'Customers', icon: 'User', path: '/customers' },
            { id: 4, title: 'Inventory', icon: 'Folder', path: '/inventory' },
            { id: 5, title: 'Conversations', icon: 'Chat', path: '/conversations', push: {alarm : 16, class: 'conversation'} },
            { id: 6, title: 'Settings', icon: 'Setting', path: '/settings' },
        ]
    }
}

var breadCrumbData = {
    namespaced: true,
    state: {
        BreadCrumb : [
                {
                    name: 'ordersmain',
                    data: [
                        {id: 1, title: 'Orders', path: 'ordersmain'}
                    ],
                },
                {
                    name: 'vieworder',
                    data: [
                        {id: 1, title: 'Orders', path: 'ordersmain'}, 
                        {id: 2, title: 'View Order', path: 'vieworder'}
                    ],
                },
                {
                    name: 'customersmain',
                    data: [
                        {id: 1, title: 'Customers', path: 'customersmain'}, 
                    ],
                },
                {
                    name: 'viewcustomer',
                    data: [
                        {id: 1, title: 'Customers', path: 'customersmain'}, 
                        {id: 2, title: 'View Customer', path: 'viewcustomer'}
                    ],
                },
                {
                    name: 'inventorymain',
                    data: [
                        {id: 1, title: 'Inventory', path: 'inventorymain'}, 
                    ],
                },
                {
                    name: 'newinventory',
                    data: [
                        {id: 1, title: 'Inventory', path: 'inventorymain'}, 
                        {id: 2, title: 'New Inventory', path: 'newinventory'}
                    ],
                },
                {
                    name: 'viewinventory',
                    data: [
                        {id: 1, title: 'Inventory', path: 'inventorymain'}, 
                        {id: 2, title: 'View Inventory', path: 'viewinventory'}
                    ],
                },
                {
                    name: 'conversations',
                    data: [
                        {id: 1, title: 'Conversations', path: 'conversations'}, 
                    ]
                },
                {
                    name: 'account',
                    data: [
                        {id: 1, title: 'Settings', path: 'account'}, 
                    ],
                },
                {
                    name: 'business',
                    data: [
                        {id: 1, title: 'Settings', path: 'account'},
                    ],
                },
                {
                    name: 'security',
                    data: [
                        {id: 1, title: 'Settings', path: 'account'}, 
                    ],
                },
        ]
    }
}