import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({
    // vue의 data와 비슷
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''], 
            ['', '', ''],
        ],
        turn: 'o',
        winner: '',
    },
    // vue의 computed와 비슷
    getters: {

    },
    // state를 수정할 때 사용. 동기적
    mutations: {
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell}) {
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'o' ? 'x' : 'o';
        },
        [RESET_GAME](state) {
            state.turn = 'o';
            state.tableData = [
                ['', '', ''],
                ['', '', ''], 
                ['', '', ''],
            ];
        },
        [NO_WINNER](state) {
            state.winner = '';
        }
    },
    // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
    actions: {

    },
});