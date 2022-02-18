<template>
    <div>
        <!-- 클래스 바인드 -->
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <!-- 클릭 이벤트 정의 -->
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>
<script>
// 이미지 스프라이트
const rspCoords = {
    바위: '0',        
    가위: '-142px',        
    보: '-284px',        
};
const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};
const computerChoice = (imgCoord) => {
    // Object.entries 객체 요소의 값 확인하기 (키, 벨류)
    // find 조건을 만족하는 배열 요소 가져오기
    return Object.entries(rspCoords).find(function (v){
        return v[1] === imgCoord;
    })[0];
};

let interval = null;
export default {
    // 변수
    data() {
        return {
            imgCoord: rspCoords.바위, // 초기값
            result: '', // 결과
            score: 0, // 점수
        };
    },    
    // 계산
    computed: {
        computedStyleObject() {
            return {
                // background-position 0 0에서 -142px -284px 로 바뀌는 코드
                background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
            };
        }
    },
    // 화면
    methods: {
        changeHand() { // 0.1초마다 이미지 바뀌는 함수
            interval = setInterval(() => {
            if (this.imgCoord === rspCoords.바위) {
                this.imgCoord = rspCoords.가위;
            } else if(this.imgCoord === rspCoords.가위) {
                this.imgCoord = rspCoords.보;
            } else if(this.imgCoord === rspCoords.보) {
                this.imgCoord = rspCoords.바위;
            }
            }, 100);
        },
        onClickButton(choice) { // 클릭할시
            clearInterval(interval); // 시간초 멈춤
            const myScore = scores[choice]; // myScore = 가위 0, 바위 1, 보 2
            const cpuScore = scores[computerChoice(this.imgCoord)]; // cpuScore 바위 1, 가위 0, 보 2
            const diff = myScore - cpuScore;
            if (diff === 0) {
                this.result = '비겼습니다.';
            // 포함여부 확인
            } else if ([-1, 2].includes(diff)) {
                this.result = '이겼습니다';
                this.score += 1;
            } else {
                this.result = '졌습니다.';
                this.score -= 1;
            }
            setTimeout(() => {
                this.changeHand(); // 이미지 바뀌는거 잠깐 멈추고
            }, 1000); // 1초후 다시 게임시작
        },
    },
    // 인스턴스 생성전
    beforeCreate() {
        console.log('beforeCreate');
    },
    // 인스턴스 생성
    created() {
        console.log('created');
    },
    // 인스턴스 부착전
    beforeMount() {
        console.log('beforeMount');
    },
    // 인스턴스 부착
    mounted() {
        console.log('mounted');
        this.changeHand(); // 이미지변경 실행
    },
    // 인스턴스 갱신전
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    // 인스턴스 갱신
    updated() {
        console.log('updated');
    },
    // 인스턴스 소멸전
    beforeDestroy() {
        console.log('beforeDestroy');
        clearInterval(interval); // 시간초 멈춤
    },
    // 인스턴스 소멸
    destroyed() {
        console.log('destroyed');
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