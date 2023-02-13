// Computed property

let a = 'age';
/* const user = {
    name: 'Mike',
    age: 30
} */
const user = {
    name: 'Mike',
    [a]: 30
}

// Methods

// Object.assign(): 객체 복제

const user1 = {
    name: 'Mike',
    age: 30
}
const cloneUser = Object.assign({}, user1);
cloneUser.name = 'Tom'
console.log(cloneUser, user1)

const user2 = {
    name: 'Mike'
}
const info1 = {
    age: 30
}
const info2 = {
    gender: 'male'
}
Object.assign(user2, info1, info2); // {name: 'Mike', age: 30, gender: 'male'}

// Object.keys(): 키 배열 반환

const user3 = {
    name: 'Mike',
    age: 30,
    gender: 'male'
}
Object.keys(user3) // ["name","age","gender"]

// Object.values(): 값 배열 반환

Object.values(user3) // ["Mike",30,"male"]

// Object.entries(): 키/값 배열 반환

Object.entries(user3) // [["name","Mike"],["age",30],["gender","male"]]