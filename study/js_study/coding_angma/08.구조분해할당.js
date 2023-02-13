// 배열 구조 분해

let [a, b, c] = [1, 2]; // a = 1, b = 2, c = undefined

let [d=1, e=2, f=3] = [1, 2]; // 값이 undefined면 기본값이 할당

let [g, ,h] = [1, 2, 3]; // g = 1, h = 3 일부 반환값 무시

let [i, j] = [j, i]; // 배열 바꿔치기

// 객체 구조 분해

let user = {
    name: 'Mike',
    age: 30
};
let {name, age} = user;
// let name = user.name
// let age = user.age

let user1 = {
    name1: 'Mike',
    age1: 30
};
let {name1: a1, age1: b1} = user1;
// let a1 = user.name
// let b1 = user.age

let user2 = {
    name2: 'Mike',
    age2: 30
};
let {name2, age2, gender2 = 'male'} = user2; // 기본값 할당

