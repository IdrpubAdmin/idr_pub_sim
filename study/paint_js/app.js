const canvas = document.getElementById('jsCanvas');
const colors = document.getElementsByClassName('controls_color');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const save = document.getElementById('jsSave');
const ctx = canvas.getContext('2d');

// canvas에게 다루는 캔버스의 크기를 알려줌
canvas.width = 700;
canvas.height = 700;

// 기본 배경색을 흰색으로 (아니면 투명하게 저장된다)
ctx.fillStyle = '#fff'
ctx.fillRect(0,0,canvas.width,canvas.height)
// 선 색상
ctx.strokeStyle = '#2c2c2c';
// 채우기 색상
ctx.fillStyle = '#2c2c2c'
// 선 굵기
ctx.lineWidth = 2.5;

// 그리기가 실행되지않음
let painting = false;
// 채우기가 실행되지않음
let filling = false;

function stopPainting(){
    painting = false
}

function startPainting(){
    painting = true
}

// 마우스를 움직이는 동안 선을 그린다
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y)
        ctx.stroke()
    }
}

// 색상변경
function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

// 굵기변경
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;

}

// 클릭했을때 전체가 색으로 채워진다
function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = 'Fill'
    } else {
        filling = true;
        mode.innerHTML = 'Paint'
    }
    
}

// 배경색 채우기
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,canvas.width,canvas.height)
    }
}

function handleCM(event){
    event.preventDefault();
}

function saveClick(){
    const image = canvas.toDataURL();
    // a 태그 속성중 URL로 가지 않는대신 다운로드 하는 속성이있다.
    const link = document.createElement('a');
    link.href = image;
    link.download = 'paintJS';
    // 가짜 클릭버튼
    link.click();
}

if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}

// 색상을 클릭하면 일어나는일
Array.from(colors).forEach(color => color.addEventListener('click', changeColor));

// 선 굵기를 조절하면 일어나는일 
if(range){
    range.addEventListener('input', handleRangeChange);
}

if(mode){
    mode.addEventListener('click', handleModeClick);
}

if(save){
    save.addEventListener('click', saveClick)
}