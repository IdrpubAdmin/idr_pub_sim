var NavigationData = {
    state: {
        categoryData : [
            { title: "Dashboard", icon: "Category" },
            { title: "Orders", icon: "Bag" },
            { title: "Customers", icon: "User" },
            { title: "Inventory", icon: "Folder" },
            { title: "Conversations", icon: "Chat" },
            { title: "Settings", icon: "Setting" },
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