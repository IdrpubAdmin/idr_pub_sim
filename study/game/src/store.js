import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

class Job {
    constructor(name,koName,skill1,skill2,skill3){
        this.name = name;
        this.koName = koName;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
        this.hp = 100;
        this.mp = 10;
        this.damege = 10;
    }
}

const pathfinder = new Job('pathfinder','패스파인더','카디널블레스트','옵시디언베리어','얼티밋블레스트')
const adele = new Job('adele','아델','디바이드','오더','인피니트')
const bishop = new Job('bishop','비숍','빅뱅','홀리심볼','프레이')
const darkknight = new Job('darkknight','다크나이트','궁니르디센트','리인카네이션','피어스사이클론')
const hoyoung = new Job('hoyoung','호영','멸화염','호접지몽','괴력난신')
const ark = new Job('ark','아크','끝나지않는악몽','끝없는고통','근원의기억')

const store = new Vuex.Store({
    state: {
        jobList : {
            pathfinder,
            adele,
            bishop,
            darkknight,
            hoyoung,
            ark
        },
        job : Object,
        lv : 1
    },
    mutations: {
        increment(state){
            state.count++
        }
    },
    plugins: [
        createPersistedState({
            // paths: ["",""], 여기 적힌 모듈만 저장됨
        })
    ],
})

export default store