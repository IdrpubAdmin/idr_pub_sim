var NavigationData = {
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

var store = new Vuex.Store({
    modules: {
        NavigationData: NavigationData,
    },
    state: {
        // login : true, 
        isActive : false,
        newOrder : false,
    },
    mutations: {
        // checkLogin(state){
        //     state.login = !state.login
        // },
        checkActive(state){
            state.isActive = !state.isActive
        },
        toggleModal(state, payload){
            state.newOrder = !state.newOrder
            // state.payload = !state.payload
            // if(payload = state.newOrder){
            //     console.log(payload)
            // }
        }
    },
    getters: {
        NavigationData: function NavigationData(state) {
            return state.NavigationData;
        },
        // Login(state){
        //     return state.login
        // },
        isActive(state){
            return state.isActive
        },
        newOrder(state, payload){
            console.log(payload)
            return state.newOrder
        }
    },
    actions: {
        // checkLogin({commit}) {
        //     commit('checkLogin')
        // }
    }
});