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
        modalActive : [],
        btnActive : []
    },
    mutations: {
        // checkLogin(state){
        //     state.login = !state.login
        // },
        checkActive(state){
            state.isActive = !state.isActive
        },
        toggleModal(state, payload){
            if(state.modalActive.includes(payload)){
                for(let i = 0; i < state.modalActive.length; i++) {
                    if(state.modalActive[i] === payload) {
                        state.modalActive.splice(i, 1);
                        i--;
                    }
                }
            }else{
                state.modalActive.push(payload);
            }
            // if(payload = state.newOrder){
            //     console.log(payload)
            // }
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
        modalActive(state){
            return state.modalActive
        },
        btnActive(state){
            return state.btnActive
        }, 
    },
    actions: {
        // checkLogin({commit}) {
        //     commit('checkLogin')
        // }
    }
});