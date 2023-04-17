
<template>
  <div class="container p-5">
    <input type="text" v-model="postcode" placeholder="우편번호">
    <input type="button" @click="execDaumPostcode()" value="우편번호 찾기"><br>
    <input type="text" v-model="address" id="address" placeholder="주소"><br>
    <input type="text" id="detailAddress" placeholder="상세주소">
    <input type="text" v-model="extraAddress" id="extraAddress" placeholder="참고항목">
    <img-up></img-up>
    <tree :nodes="nodes" :config="config" @nodeOpened="log()"></tree>
    <input v-model="searchText" type="text" />
    <Tree
      :nodes="data"
      :search-text="searchText"
      :indentSize="10"
    />
  </div>
</template>

<script>
import imgUp from './imgUp.vue'
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css";

export default {
  components:{
    imgUp : imgUp,
    tree: treeview,
    Tree,
  },
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
      },
      // vue3-treeview
      config: { // 트리 구성
        roots: ["id1", "id2"], // 가장 최상단 루트
        // leaves: [], // 자식이 없는 노드들이 저장되는곳
        padding: 25, // 뎁스당 여백
        editable: false, // 요소를 편집할수 있나
        editing: '', // 현재 편집 노드의 ID 값
        checkboxes: false, // 체크박스 요소 활성화
        checkMode: "manual", // 체크박스 모드 manual: 선택된 개체만 or auto: 선택된 개체 자식들까지 선택
        dragAndDrop: false, // 드래그 기능
        keyboardNavigation: false, // 키보드 탐색 활성화
        disabled: false, // 모든 트리 비활성화
        editableClass: "editable", // 편집기능이 활성화 되었을때 붙는 클래스명
        disabledClass: "disabled", // 비활성화 되었을때 붙는 클래스명
        focusClass: "focused", // 포커스 되었을때 붙는 클래스명
        checkedClass: "checked", // 체크 되었을때 붙는 클래스명
        indeterminateClass: "indeterminate", // 불확실할 때 붙는 클래스명
        openedIcon: { // 열려있을때 아이콘
          type: "shape",
          stroke: "black",
          strokeWidth: 3,
          viewBox: "0 0 24 24",
          draw: "M 2 12 L 22 12",
        },
        closedIcon: { // 닫혀있을때 아이콘
          type: "shape",
          stroke: "black",
          strokeWidth: 3,
          viewBox: "0 0 24 24",
          draw: `M 12 2 L 12 22 M 2 12 L 22 12`,
        }
      },
      nodes: {
        id1: {
          text: "text1", // 표시되는 텍스트
          children: ["id11", "id12"], // 자식 배열
          state: { // 노드 상태 (기본값)
            opened: false, // 열고 닫힘
            disabled: false, // 기능 비활성화
            editable: true, // 편집 기능
            draggable:	true, // 드래그 기능
            dropable: true, // 드롭 기능
            checked: false, // 체크박스 상태
            indeterminate: false, // 체크박스 불확정 상태
            isLoading: false, // 비동기 로딩에 사용
          }
        },
        id11: {
          text: "text11",
        },
        id12: {
          text: "text12",
        },
        id2: {
          text: "text2",
        },
      },
    }
  },
  // vue3-tree
  setup() {
    const data = ref([
      {
        id: "1",
        label: "a",
        nodes: [
          {
            id: "4",
            label: "aa",
          },
          {
            id: "5",
            label: "ab",
          },
        ],
      },
      {
        id: "2",
        label: "b",
        nodes: [
          {
            id: "6",
            label: "ba",
            nodes: [
              {
                id: "11",
                label: "aaaa",
                nodes: [
                  {
                    id: "15",
                    label: "aaaa",
                  },
                  {
                    id: "16",
                    label: "bbbb",
                  },
                ],
              },
              {
                id: "12",
                label: "bbbb",
              },
            ],
          },
          {
            id: "7",
            label: "bb",
            nodes: [
              {
                id: "13",
                label: "cccc",
              },
              {
                id: "14",
                label: "dddd",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        label: "c",
      },
    ]);
    const searchText = ref("");
    return {
      data,
      searchText,
    };
  },
  methods: {
    log(){
      console.log(1)
    },
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