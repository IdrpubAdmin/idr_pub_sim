<template>
    <div>
        <!-- v-bind (:) 클래스 목록과 인라인 스타일을 조작하기 위해 사용 -->
        <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <!-- v-if와 비슷하지만 dispaly를 none 시켜버림 -->
        <div v-show="result.length">
            <div>평균 시간: {{average}}ms</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>
<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
    // 속성, 변수 저장
    data() {
        return {
            result: [], // 결과
            state: 'waiting', // waiting 이라는 클래스를 바인딩
            message: '클릭해서 시작하세요.' // 메세지 창
        };
    },    
    // 일반 데이터를 가공해서 쓸때 (간단한 연산일 때만 이용하는 것이 좋다) > 유지보수 문제
    computed: {
        average() {
            // reduce 배열 요소 하나로 정리하기
            return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
        }
    },
    // 화면에서 보여지는 바뀌는 부분
    methods: {
        onReset(){
            this.result = []; // 결과 초기화
        },
        onClickScreen(){ // 스크린 클릭시
            if (this.state === 'waiting') { // waiting 에서 클릭시 (게임 시작전)
                this.state = 'ready'; // 클래스는 ready 로 바뀌고
                this.message = '초록색이 되면 클릭하세요'; // 메세지도 바뀜
                timeout = setTimeout(() => { // 타이머 작동
                    this.state = 'now'; // 클래스는 now 로 바뀌고
                    this.message = '지금 클릭!'; // 메세지 바뀜
                    startTime = new Date(); // 시간 저장
                }, Math.floor(Math.random() * 1000) + 2000); // 2~3초중 랜덤
            } else if (this.state === 'ready') { // ready 에서 클릭시 (화면이 바뀌기전에 눌렀을때)
                clearTimeout(timeout); // 시간 초기화
                this.state = 'waiting'; // 게임 시작전으로 초기화
                this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'; // 메세지 띄움
            } else if (this.state === 'now') { // now 에서 클릭시 (정상적으로 눌렀을때)
                endTime = new Date(); // 누른시간 저장
                this.state = 'waiting'; // 게임 초기화
                this.message = '클릭해서 시작하세요.!'; // 게임 초기화
                this.result.push(endTime - startTime); // 결과 보여줌 (누른시간 - 시작시간)
            }
        },
    },
};
</script>

<style scoped>
    #screen{
        width: 800px;
        height: 400px;
        text-align: center; 
        user-select: none;
    }
    #screen.waiting{
        background-color: aqua;
    }
    #screen.ready{
        background-color: red;
        color: white;
    }
    #screen.now{
        background-color: greenyellow;
    }
</style>