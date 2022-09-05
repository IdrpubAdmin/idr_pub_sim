import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: {
        count : 1
    },
    getters: {
        count(state) {
            return state.count
        }
    },
    mutations: {
        update(state) {
            state.count += 100
        }
    }
}

const moduleB = {
    namespaced: true,
    state: {
        count : 2
    },
    getters: {
        count(state) {
            return state.count
        }
    },
    mutations: {
        update(state) {
            state.count += 200
        }
    }
 }

const store = new Vuex.Store ({
    state: {
        count: 0,
        message: '메시지'
    },
    getters: {
        message(state) {
            return state.message
        }
    },
    mutations: {
        setMessage(state, payload) {
            state.message = payload.message
        }
    },
    actions: {
        doUpdate({commit}, message) {
            commit('setMessage', {message})
        }
    },
    modules: {
        moduleA,
        moduleB
    }
})

console.log(store)

export default store