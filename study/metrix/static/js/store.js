var NavigationData = {
    state: {
        categoryData : [
            { title: "Dashboard", icon: "category" },
            { title: "Orders", icon: "bag" },
            { title: "Customers", icon: "user" },
            { title: "Inventory", icon: "folder" },
            { title: "Conversations", icon: "chat" },
            { title: "Settings", icon: "setting" },
        ]
    }
}

var store = new Vuex.Store({
    modules: {
        NavigationData: NavigationData,
    },
    state: {

    },
    getters: {
        NavigationData: function NavigationData(state) {
            return state.NavigationData;
        },
    },
});