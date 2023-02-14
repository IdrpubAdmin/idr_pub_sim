
// 객체를 콘솔에 찍어보면 __proto__ 란것이 있는데 이것이 프로토타입

const car = {
    wheels: 4,
    drive() {
        console.log("dirve..");
    }
}
const bmw = {
    color: "red",
    navigation: 1
}
const benz = {
    color: "black"
}
const audi = {
    color: "blue"
}

// 객체 안에 공통적으로 들어가야할 부분이 있다면 따로 만들고 프로토타입을 이용해 넣어줄수있음
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

// 이러면 bmw안에는 color, navigation 밖에 없지만 bmw안의 __proto__에 wheels와 drive()가 저장되어있음 이것이 상속

const x5 = {
    color: "white",
    name: "x5"
}
x5.__proto__ = bmw;
// 프로토타입

