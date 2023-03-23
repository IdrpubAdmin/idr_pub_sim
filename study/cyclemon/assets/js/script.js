document.addEventListener('scroll', function(){
    const navButton = document.querySelectorAll('nav ul li')
    const contents = document.querySelectorAll('.container section')
    const scroll = window.pageYOffset
    for (let i = 0; i < navButton.length; i++) {
        for (let x = 0; x < navButton.length; x++) {
            if(contents[i].offsetTop <= scroll){
                navButton[x].classList.remove('active')
                navButton[i].classList.add('active')
            }
        }
    }
})

let beforeScroll = window.pageYOffset

document.addEventListener('scroll', function(){
    const navButton = document.querySelectorAll('nav ul li')
    const contents = document.querySelectorAll('.container section')
    let afterScroll = window.pageYOffset
    console.log(`전: ${beforeScroll}`)
    console.log(`후: ${afterScroll}`)
    let scroll += Number(afterScroll) - Number(beforeScroll)
    let test = 0
    test += scroll
    console.log(test)
    for (let i = 0; i < navButton.length; i++) {
        if(navButton[i].classList.contains('active') && i < navButton.length - 1){
            // console.log(contents[i].offsetHeight / 100)
           contents[i].setAttribute('style', `background-position: 50% ${(contents[i].offsetHeight / 2) - scroll}px;`) // 48% 40% 30% ...
           beforeScroll = afterScroll
        }
    }
})

function scrollToNext() {
    const navButton = document.querySelectorAll('nav ul li')
    const contents = document.querySelectorAll('.container section');
    for (let i = 0; i < navButton.length; i++) {
        if(navButton[i].classList.contains('active') && i < navButton.length - 1){
            window.scrollTo(0, contents[i + 1].offsetTop)
        }
    }
}