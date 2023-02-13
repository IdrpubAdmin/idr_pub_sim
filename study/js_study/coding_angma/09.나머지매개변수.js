// arguments

// 함수로 넘어 온 모든 인수에 접근
// 함수내에서 이용 가능한 지역 변수
// length/index
// Array 형태의 객체

function showName(name){

}

showName('Mike') // 'Mike'가 name에 들어감

// 나머지 매개변수

// 배열형태로 전달

function showName(...names){

}

showName('Mike') // ['Mike']

// 전개 구문

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let result = [0 , ...arr1, ...arr2, 7, 8, 9] // [0,1,2,3,4,5,6,7,8,9]