// 콜백함수 : 어떤일이 완료된이후 실행되는 함수

const pr = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('OK')
    }, 3000);
})

// new Promise
// state : pending (대기)
// result : undefined

// resolve(value) 성공한 경우
// state : fulfilled (이행됨)
// result : value

// reject(error) 실패한 경우
// state : rejected (거부됨)
// result : error

// 실행하는 함수는 then을 붙임
pr.then(
    function(result){}, // 이행 되었을때 시행 함수
    function(err){} // 거부 되었을때 시행하는 함수
)

// 가독성을 위해 catch문 사용
pr.then(
    function(result){}, // 이행 되었을때 시행 함수
).catch(
    function(err){} // 거부 되었을때 시행하는 함수
)

// finally문
pr.then(
    function(result){}, // 이행 되었을때 시행 함수
).catch(
    function(err){} // 거부 되었을때 시행하는 함수
).finally(
    function(){} // 이행이든 거부든 처리가 완료되면 항상 실행 (ex: 로딩화면)
)

// promise는 순차적으로 실행

// Promise.all을 쓰면 작업이 다 끝난후 동시에 실행하여 결과를 배열로 받음

// Promise.race를 쓰면 제일 처음에 끝난 함수의 결과만 실행함 (ex: 용량이 큰 이미지들을 로딩할때)