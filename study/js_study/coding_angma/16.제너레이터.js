// Generator 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능 function 옆에 *을 써서 만듬

function* fn(){
    yield 1; // yield 함수의 실행을 멈춤
    yield 2;
    yield 3;
    return "finish"
}

const a = fn()

// 그냥 a를 호출하면 안뜸
// next()를 써서 호출
// 호출시 1이 반환 {value: 1 (yield 옆에 쓰여진 값), done: false(함수가 끝났는가)}
// 또 a.next()를 써서 호출 하면 2가 반환

// return()를 쓰면 즉시 함수가 끝남 done을 true로 바꿈 ()안에 인자를 value로 받음

// throw()도 똑같음

// Generator는 값을 미리 만들어 두지 않고 필요할때마다 만들어 break없는 while문도 가능

// yield*을 이용해 다른 Generator를 불러오는것도 가능