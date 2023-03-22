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
    let currentContentIndex = 0;
    const contents = document.querySelectorAll('.container section');
    if (currentContentIndex < contents.length - 1) {
        currentContentIndex++;
        contents[currentContentIndex].scrollIntoView({ behavior: 'smooth' });
    }
}