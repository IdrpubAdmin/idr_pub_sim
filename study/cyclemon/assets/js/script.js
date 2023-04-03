document.addEventListener('scroll', function(){
    const navButton = document.querySelectorAll('.main-navigator ul li')
    const contents = document.querySelectorAll('.container section')
    const scroll = Math.ceil(window.scrollY)
    const media = matchMedia("screen and (min-width: 1024px)").matches;
    // nav 버튼 표시 이벤트
    for (let i = 0; i < navButton.length; i++) {
        for (let x = 0; x < navButton.length; x++) {
            if(contents[i].offsetTop <= scroll){
                navButton[x].classList.remove('active')
                navButton[i].classList.add('active')
            }
        }
    }
    // 시차 이벤트
    for (let i = 0; i < navButton.length; i++) {
        const scrollAmount = scroll - contents[i].offsetTop // 스크롤 양 (px)
        const contentHeight = contents[i].offsetHeight / 150 // 한번 스크롤 될때 배경 감도 (숫자 높을수록 체감 많이됨)
        const num = scrollAmount / contentHeight // 스크롤된 양 (%)
        const percent = 60 - num // 50은 포지션값 (60으로 변경되면 바꿔야함)
        if(document.querySelector('.main-page') && media){
            contents[i].setAttribute('style', `background-position: 50% ${percent}%;`)
        }
    }
})

window.addEventListener('load', function(){
    const navButton = document.querySelectorAll('.main-navigator ul li')
    navButton[0].classList.add('active')
    // 랜딩 페이지
    setTimeout(function(){
        document.querySelector('.splash-img').classList.add('load')
        document.querySelector('body').classList.remove('lock')
    }, 1000);
});

function scrollMove(i) {
    const contents = document.querySelectorAll('.container section');
    window.scrollTo(0, contents[i].offsetTop)
}

function scrollToNext() {
    const navButton = document.querySelectorAll('.main-navigator ul li')
    const contents = document.querySelectorAll('.container section');
    for (let i = 0; i < navButton.length; i++) {
        if(navButton[i].classList.contains('active') && i < navButton.length - 1){
            window.scrollTo(0, contents[i + 1].offsetTop)
        }
    }
}