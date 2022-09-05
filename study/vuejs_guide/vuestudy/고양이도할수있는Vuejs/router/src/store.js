import Vue from 'vue'
import Vuex from 'vuex'
import products from "./products";

Vue.use(Vuex)

const product = {
    namespaced: true,
    state: {
        detail: {},
        test: '안녕'
    },
    getters: {
        detail: state => state.detail
    },
    mutations: {
        set(state, {detail}){state.detail = detail},
        clear(state) {state.detail = {}}
    },
    actions: {
        load({commit}, id){
            products.asyncFind(id, detail => {
                commit('set', {detail})
            })
        },
        destroy({commit}) {
            commit('clear')
        },
    }
}

const store = new Vuex.Store ({
    modules: {
        product,
    }
})

export default store