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

function scrollToNext() {
    const navButton = document.querySelectorAll('nav ul li')
    const contents = document.querySelectorAll('.container section');
    for (let i = 0; i < navButton.length; i++) {
        if(navButton[i].classList.contains('active') && i < navButton.length - 1){
            window.scrollTo(0, contents[i + 1].offsetTop)
        }
    }
}