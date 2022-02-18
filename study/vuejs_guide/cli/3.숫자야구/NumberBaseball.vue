<template>
    <div>
        <h1>{{result}}</h1>
        <!-- v-on (@) 이벤트를 듣고 트리거 될 때 js 실행 -->
        <form @submit.prevent="onSubmitForm">
            <!-- v-midel 폼 입력 바인딩 -->
            <input ref="answer" minlength="4" maxlength="4" v-model="value" />
            <button>입력</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <!-- tries 시도수 만큼 t 반복 -->
            <li v-for="t in tries" :key="t">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div> 
            </li>
        </ul>
    </div>
</template>
<script>
// 숫자 생성하는 함수
const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    // 4번 반복한다
    for (let i = 0; i < 4; i += 1){
        const chosen = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
        // const chosen = Math.floor(Math.random() * (9 - i  )) // 0~8의 정수 (0~8의 숫자 생성)
        // array.push(candidates[index]); // 마지막위치에 배열추가 (하나를 뽑고 array에 넣어줌)
        // candidates.splice(index, 1); // index위치의 1개를 삭제한다 (뽑은곳에서 뽑힌 숫자 삭제)
        array.push(chosen);
    }
    return array;
}
export default {
    // 정보를 저장하는곳 인스턴스의 데이터 속성, 변수
    data() {
        return {
            answer: getNumbers(), // 숫자 생성하는 함수
            tries: [], // 시도 수
            value: '', // 입력
            result: '', // 결과
        }
    },
    // 화면 로직 제어와 관련된 메서드를 정의
    methods: {
        onSubmitForm() {
            // 만약 내가 입력한 숫자와 생성한 숫자가 같다면 (정답을 맞췄다면) // join('') 배열요소를 결합해 문자열로 반환 ('')쓰면 콤마없이 반환
            if (this.value === this.answer.join('')){
                this.tries.push({
                try: this.value,
                result: '홈런',
            });
            this.result = '홈런';
            this.answer = getNumbers(); // 숫자 생성
            this.value = ''; // 게임초기화
            this.tries = []; // 게임초기화
            this.$refs.answer.focus(); //포커스를 다시 맞춰줌
            // 정답을 틀렸다면
            } else {
                // 10번넘게 시도했다면
                if (this.tries.length >=9) {
                    // 결과에 메세지를 띄우고 정답을 알려줌
                    this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join('')}이었습니다!`;
                    alert('게임을 다시 시작합니다.')
                    // 게임초기화
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries = []; 
                    this.$refs.answer.focus();
                }
                let strike = 0;
                let ball = 0;
                // 문자열을 숫자 배열로 바꾸는 코드
                // split('') 한글자단위로 나눠진 문자열 반환
                // map 배열요소 추출하여 새로운 배열 생성
                // parseInt 문자를 다시 숫자열로 반환
                const answerArray = this.value.split('').map(v => parseInt(v));
                for (let i = 0; i < 4; i += 1){
                    if (answerArray[i] === this.answer[i]){
                        // 숫자 자릿수 모두 정답
                        strike++;
                    // includes 문자열 포함여부 확인 (문자열 어디에 있던)
                    } else if(this.answer.includes(answerArray[i])){
                        // 숫자만 정답
                        ball++;
                    }
                }
                // 결과를 알려줌
                this.tries.push({
                    try: this.value,
                    result: `${strike} 스트라이크, ${ball} 볼입니다.`
                });
                this.value = '',
                this.$refs.answer.focus();
            }      
        }
    },
} 
</script>
<style>
    
</style>  