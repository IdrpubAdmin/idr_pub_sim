// async를 사용하면 항상 프로미스를 반환

async function getName() {
    return "Mike";
}
getName().then((name) => {
    console.log(name)
})

// await 값을 기다렸다가 넣어줌

async function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(name);
        }, 1000)
    })
}
async function showName(){
    const result = await getName('Mike')
}
showName()

// try, catch

async function order() {
    try { 
        const result1 = await f1()
        const result2 = await f2()
        const result3 = await f3() // 이행 되었을때 시행
    } catch {
        // 거부 되었을때 시행
    }
}
order();