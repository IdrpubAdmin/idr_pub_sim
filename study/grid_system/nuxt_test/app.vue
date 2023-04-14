
<template>
  <div class="container p-5">
    <input type="text" v-model="postcode" placeholder="우편번호">
    <input type="button" @click="execDaumPostcode()" value="우편번호 찾기"><br>
    <input type="text" v-model="address" id="address" placeholder="주소"><br>
    <input type="text" id="detailAddress" placeholder="상세주소">
    <input type="text" v-model="extraAddress" id="extraAddress" placeholder="참고항목">
    <img-up></img-up>
    <!-- <div id="tree" class="tui-tree-wrap"></div> -->
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
  </div>
</template>

<script>
// useHead({
//   title: 'My App',
//   meta: [
//     { name: 'description', content: 'My amazing site.' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
// })

import imgUp from './imgUp.vue'
// import Tree from 'tui-tree';
import { Bar } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  components:{
    imgUp : imgUp,
    Bar
  },
  methods: {
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }
 
          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
        },
      }).open();
    },
  },
}
</script>

<style scoped>
input {
  border: 1px solid black;
  margin: 5px;
}
</style>