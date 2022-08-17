import { createStore } from "vuex";

export default createStore({
    state: {
        message:'초기 메세지',
        count: 0
    },
    getters: {
      message(state) {
        return state.message
      }
    },
    mutations: {
        increment(state){
          state.count++
        }
    }
});
