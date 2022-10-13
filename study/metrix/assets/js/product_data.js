var productData = {
    namespaced: true,
    state: {
        newOrderItemList: [],
        newOrderItemId: [],
        total : 0,
        items: [{
            id: 1,
            name : 'iPhone 13',
            price : 590000,
            count : 1,    
            sum : 590000,
            src : 'iphone13'
        },{
            id: 2,
            name : 'iPhone 14',
            price : 730000,
            count : 1,    
            sum : 730000,
            src : 'iphone12'
        },{
            id: 3,
            name : 'iPhone 15',
            price : 780000,
            count : 1,    
            sum : 780000,
            src : 'iphone13'
        },{
            id: 4,
            name : 'iPhone 16',
            price : 820000,
            count : 1,    
            sum : 820000,
            src : 'iphone13'
        },{
            id: 5,
            name : 'iPhone 17',
            price : 900000,
            count : 1,    
            sum : 900000,
            src : 'iphone12'
        }]
    },
    mutations: {
        totalItems(state){
            state.total = 0
            for (let i = 0; i < state.newOrderItemList.length; i++) {
                state.total += state.newOrderItemList[i].sum;
            }
        },
        pushItem(state, payload){
            if(state.newOrderItemId.includes(payload + 1) === false){
                state.newOrderItemId.push(state.items[payload].id);
                state.newOrderItemList.push(state.items[payload]);
                store.commit('productData/totalItems')
            }
        },
        deleItem(state, payload){
            for(let i = 0; i < state.newOrderItemList.length; i++) {
                if(state.newOrderItemList[i].id === payload) {
                    state.newOrderItemList.splice(i, 1);
                    i--;
                }
            }
            for(let i = 0; i < state.newOrderItemId.length; i++) {
                if(state.newOrderItemId.includes(payload)) {
                    state.newOrderItemId.splice(i, 1);
                    i--;
                }
            }
            store.commit('productData/totalItems')
        },
        countPlus(state, payload){
            for(let i = 0; i < state.newOrderItemList.length; i++) {
                if(state.newOrderItemList[i].id === payload) {
                    if(state.newOrderItemList[i].count < 10){
                        ++state.newOrderItemList[i].count
                        state.newOrderItemList[i].sum = state.newOrderItemList[i].price * state.newOrderItemList[i].count
                    }
                }
            }
            store.commit('productData/totalItems')
        },
        countMinus(state, payload){
            for(let i = 0; i < state.newOrderItemList.length; i++) {
                if(state.newOrderItemList[i].id === payload) {
                    if(state.newOrderItemList[i].count > 0){
                        --state.newOrderItemList[i].count
                        state.newOrderItemList[i].sum = state.newOrderItemList[i].price * state.newOrderItemList[i].count
                    }
                }
            }
            store.commit('productData/totalItems')
        },
    },
    getters: {
        newOrderItemList: function newOrderItemList(state) {
            return state.newOrderItemList;
        },
        total: function total(state) {
            return state.total;
        }
    },
}