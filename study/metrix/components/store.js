var NavigationData = {
    state: {
        categoryData : [
            { title: "Dashboard", icon: "Category", path: "/"},
            { title: "Orders", icon: "Bag", path: "/orders" },
            { title: "Customers", icon: "User", path: "/customers" },
            { title: "Inventory", icon: "Folder", path: "/inventory" },
            { title: "Conversations", icon: "Chat", path: "/conversations" },
            { title: "Settings", icon: "Setting", path: "/settings" },
        ]
    }
}

var store = new Vuex.Store({
    modules: {
        NavigationData: NavigationData,
    },
    state: {
        login : false, 
        isActive : false 
    },
    mutations: {
        checkLogin(state){
            if (state.login===false){
                state.login = true
            } else {
                state.login = false
            }
        },
        checkActive(state){
            if (state.isActive===false){
                state.isActive = true
            } else {
                state.isActive = false
            }
        }
    },
    getters: {
        NavigationData: function NavigationData(state) {
            return state.NavigationData;
        },
        Login(state){
            return state.login
        },
        isActive(state){
            return state.isActive
        },
    },
    actions: {
        checkLogin({commit}) {
            commit('checkLogin')
        }
    }
});