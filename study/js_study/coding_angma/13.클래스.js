class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name)
    }
}

const mike = new User('Mike', 30)

// 메소드 상속 (extends)

class Car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..")
    }
}
class Bmw extends Car {
    park() {
        console.log("PARK")
    }
}
const z4 = new Bmw("blue")

// 메소드 오버라이딩

// 동일한 이름의 메소드를 사용하면 덮어씌워짐

// 부모의 메소드를 그대로 사용하고 싶으면 super 를 사용하면 된다

class Benz extends Car {
    drive() {
        super.drive();
    }
}

// 오버라이딩

// 상속받은 Class에 constructor를 사용하려면 super(부모 constructor가 받는 동일한 인수) 메소드가 필요함

class Audi extends Car {
    constructor(color){
        super(color);
        this.navigation = 1;
    }
}