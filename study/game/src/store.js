import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

class Job {
    constructor(name,koName,skill1,skill2,skill3){
        this.name = name;
        this.koName = koName;
        this.skill = [skill1,skill2,skill3];
        this.hp = 100;
        this.mp = 10;
        this.power = 10;
        this.tf = true;
    }
}
// class Pathfinder extends Job {
    // 상속
// }

const pathfinder = new Job('pathfinder','패스파인더',{
    name : '카디널블래스트', 
    skillDamage : 1,
    gauge:1,
    explanation: '일직선으로 날아가 100%의 데미지를 주는 폭발형 화살을 발사한다.'
    },{
    name : '옵시디언배리어', 
    gauge:2,
    skillDamage : 1, 
    explanation: '렐릭의 힘을 증폭하여 자신을 보호한다.'
    },{
    name : '얼티밋블래스트', 
    gauge:2,
    skillDamage : 1, 
    explanation: '게이지를 모두 소모하여 소모한게이지만큼 모든 것을 꿰뚫는 강력한 화살을 날린다.'
    },
    1
)
const adele = new Job('adele','아델',{
    name : '디바이드',
    explanation: '거대한 대검을 생성하여 전방의 적을 100%의 데미지로 절단한다.'
    },{
    name : '오더',
    explanation: '크리에이션으로 창조한 에테르 소드에 명령을 내려 적을 추적하게 한다.'
    },{
    name : '인피니트',
    explanation: '무수한 에테르 소드가 창조되는 공간을 만든다'
    },
    3  
)
const bishop = new Job('bishop','비숍',{
    name : '빅뱅',
    explanation: '신성력을 넓게 퍼뜨린 후 폭발시켜 100%의 데미지로 공격한다.'
    },{
    name : '홀리심볼',
    explanation: '비숍은 몬스터를 사냥할 때 더 많은 경험치를 획득할 수 있다'
    },{
    name : '프레이',
    explanation: '기도를 통해 성스러운 축복의 영역을 만들어 낸다'
    },
    3
)
const darkknight = new Job('darkknight','다크나이트',{
    name : '궁니르디센트',
    explanation: '신화 속의 창을 적에게 던져 치명적인 피해를 입힌다.'
    },{
    name : '리인카네이션',
    explanation: 'HP가 0이 되면 어둠과의 계약에 의해 죽지 않고 무적 상태가 된다.'
    },{
    name : '다크스피어',
    explanation: '어둠의 힘을 담은 창을 던져 적을 공격한다.'
    },
    3
)
const hoyoung = new Job('hoyoung','호영',{
    name : '여의선',
    explanation: '거대하게 변화시킨 부채를 휘두른다.'
    },{
    name : '멸화염',
    explanation: '부채를 크게 휘둘러 부정한 것들을 멸하는 큰 화염을 일으킨다.'
    },{
    name : '괴력난신',
    explanation: '근원을 알 수 없는 미지의 신들로부터 힘을 빌린다.'
    },
    2
)
const ark = new Job('ark','아크',{
    name : '잊혀지지않는악몽',
    explanation: '스펙터의 힘이 깃든 손으로 적을 할퀸다.'
    },{
    name : '끝없는고통',
    explanation: '심연의 통로를 개방하여 전방을 짧은 시간 동안 난타한 후 심연의 파수꾼을 불러내 마무리 일격을 날린다.'
    },{
    name : '근원의기억',
    explanation: '심연의 근원으로 이어진 통로를 열어 그 곳을 통과했을 때의 기억을 되살린다.'
    },
    2
)

// const pathfinder = {
//     name : 'pathfinder',
//     koName : '패스파인더',
//     skill1 : {
//         name : '카디널블래스트',
//         skillDamage : 2
//     },
//     skill2 : '옵시디언베리어',
//     skill3 : '얼티밋블레스트',
//     hp : 100,
//     mp : 10,
//     power : 10,
// }

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

    },
    plugins: [
        createPersistedState({
            // paths: ["",""], 여기 적힌 모듈만 저장됨
        })
    ],
})

export default store