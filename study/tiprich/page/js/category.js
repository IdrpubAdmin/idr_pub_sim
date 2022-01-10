var button = document.querySelectorAll('.content ul li');  

button.forEach(function (e){
    e.addEventListener('click', function() {
        e.classList.add('hover');
    });
});