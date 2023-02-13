// Symbol() 유일한 식별자를 만들때 사용

const a = Symbol();
const b = Symbol();
a === b // false
a == b // false