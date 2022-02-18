<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한 번 더!</button>
    </div> 
</template>

<script>
// 모듈 가져오기 import { 모듈명 } from './파일명';
import LottoBall from './LottoBall';

function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1); //fill 배열에 동일한 value값을 채워줌 map 콜백 함수로 새로운 배열 생성
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]); // 이미 뽑힌 번호 제거
    }
    const bonusNumbar = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c); //slice(0, 6) 0부터 6까지 문자열 추출 sort 배열을 비교함수로 정렬하기
    return [...winNumbers, bonusNumbar]; // winNumbers 배열요소 결합
}

const timeouts = [];
export default {
    // 조합하여 화면을 구성할 수 있는 화면의 특정영역
    components: {
        LottoBall,
    },
    data() {
        return {
            winNumbers: getWinNumbers(), // 숫자 뽑기
            winBalls: [], // 공을 몇개 뽑을지
            bonus: null, // 보너스볼 처음에 안보이게
            redo: false, // 버튼 처음에 안보이게
        };
    },    
    // 화면
    methods: {
        showBalls() {
            for (let i = 0; i < this.winNumbers.length - 1; i++) {
            timeouts[i] = setTimeout(() => {
                this.winBalls.push(this.winNumbers[i]);
            }, (i + 1) * 1000); // 1초마다 공뽑기
            }
            timeouts[6] = setTimeout(() => {
                this.bonus = this.winNumbers[6]; // 7번째 볼 (보너스볼)
                this.redo = true; // 다시시작 버튼 보이게
            }, 7000); // 7초후 함수시작
        }, 
        onClickRedo() { // 한번더 버튼
            this.winNumbers = getWinNumbers(); // 숫자 뽑기
            this.winBalls = []; // 공 뽑기
            this.bonus = null; // 보너스볼 보이지않게
            this.redo = false; // 버튼 보이지않게
            this.showBalls(); // 다시 시작
        },
    },
    mounted() {
        this.showBalls() // 게임 시작
    },
    beforeDestroy() {
        timeouts.forEach((t) => {
            clearTimeout(t); // 게임 종료
        });
    },
};
</script>

<style scoped>
   #computer {
       width: 142px;
       height: 200px;
       background-position: 0 0; 
   }
</style>