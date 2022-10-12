var NavigationData = {
    namespaced: true,
    state: {
        categoryData : [
            { id: 1, title: "Dashboard", icon: "Category", path: "/"},
            { id: 2, title: "Orders", icon: "Bag", path: "/orders" },
            { id: 3, title: "Customers", icon: "User", path: "/customers" },
            { id: 4, title: "Inventory", icon: "Folder", path: "/inventory" },
            { id: 5, title: "Conversations", icon: "Chat", path: "/conversations" },
            { id: 6, title: "Settings", icon: "Setting", path: "/settings" },
        ]
    }
}

var BreadCrumbData = {
    namespaced: true,
    state: {
        BreadCrumb : [
                {
                    name: "ordersmain",
                    data: [
                        {id: 1, title: 'Orders', path: 'ordersmain'}
                    ],
                },
                {
                    name: "vieworder",
                    data: [
                        {id: 1, title: 'Orders', path: 'ordersmain'}, 
                        {id: 2, title: 'View Order', path: 'vieworder'}
                    ],
                },
                {
                    name: "customersmain",
                    data: [
                        {id: 1, title: 'Customers', path: 'customersmain'}, 
                    ],
                },
                {
                    name: "viewcustomer",
                    data: [
                        {id: 1, title: 'Customers', path: 'customersmain'}, 
                        {id: 2, title: 'View Customer', path: 'viewcustomer'}
                    ],
                },
                {
                    name: "inventorymain",
                    data: [
                        {id: 1, title: 'Inventory', path: 'inventorymain'}, 
                    ],
                },
                {
                    name: "newinventory",
                    data: [
                        {id: 1, title: 'Inventory', path: 'inventorymain'}, 
                        {id: 2, title: 'New Inventory', path: 'newinventory'}
                    ],
                },
                {
                    name: "viewinventory",
                    data: [
                        {id: 1, title: 'Inventory', path: 'inventorymain'}, 
                        {id: 2, title: 'View Inventory', path: 'viewinventory'}
                    ],
                },
                {
                    name: "account",
                    data: [
                        {id: 1, title: 'Settings', path: 'account'}, 
                    ],
                },
                {
                    name: "business",
                    data: [
                        {id: 1, title: 'Settings', path: 'account'},
                    ],
                },
                {
                    name: "security",
                    data: [
                        {id: 1, title: 'Settings', path: 'account'}, 
                    ],
                },
        ]
    }
}

var store = new Vuex.Store({
    namespaced: true,
    modules: {
        NavigationData : NavigationData,
        BreadCrumbData : BreadCrumbData,
        tableData : tableData,
    },
    state: {
        isActive : false,
        modalActive : [],
        btnActive : [],
        mobileActive : false
    },
    mutations: {
        checkActive(state){
            function detectTabletDevice() {
                const minWidth = 1024
                return window.innerWidth >= minWidth
            }
            const isTablet = detectTabletDevice()
            if(isTablet){
                state.isActive = !state.isActive
            }
        },
        toggleModal(state, payload){
            if(state.modalActive.includes(payload)){ 
                for(let i = 0; i < state.modalActive.length; i++) {
                    if(state.modalActive[i] === payload) {
                        state.modalActive.splice(i, 1);
                        i--;
                        document.body.classList.remove('mobile-active')
                    }
                }
            }else{
                state.modalActive.push(payload);
                document.body.classList.add('mobile-active')
            }
        },
        toggleBtn(state, payload){
            if(state.btnActive.includes(payload)){
                for(let i = 0; i < state.btnActive.length; i++) {
                    if(state.btnActive[i] === payload) {
                        state.btnActive.splice(i, 1);
                        i--;
                    }
                }
            }else{
                state.btnActive.push(payload);
            }
        },
        mobileActive(state){
            state.mobileActive = !state.mobileActive
            document.body.classList.toggle('mobile-active')
        },
        bodyFixed(){
            const gnbBtn = document.querySelector('.nav-btn')
            gnbBtn.addEventListener('click', function(){
                document.body.classList.toggle('mobile-active')
                }
            )
        }
    },
    getters: {
        NavigationData: function NavigationData(state) {
            return state.NavigationData;
        },
        BreadCrumbData : function BreadCrumbData(state) {
            return state.BreadCrumbData;
        },
        tableData: function tableData(state) {
            return state.tableData;
        },
        isActive(state){
            return state.isActive
        },
        modalActive(state){
            return state.modalActive
        },
        btnActive(state){
            return state.btnActive
        }, 
        mobileActive(state){
            return state.mobileActive
        },
    },
});