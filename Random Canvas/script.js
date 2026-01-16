function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(){
    return `rgb(
        ${randomNumber(0,255)},
        ${randomNumber(0,255)},
        ${randomNumber(0,255)}
    )`;
}

const container = document.querySelector('.container');
container.addEventListener('click', function(event) {
    console.log(event);

    const canvas = document.createElement('div');
    canvas.classList.add('NewElement');

    const size = randomNumber(50, 200);
    canvas.style.width = size +"px";
    canvas.style.height = size +"px";

    canvas.style.backgroundColor = randomColor();    
    canvas.style.position = 'absolute';
    canvas.style.left = event.clientX - size/2 + "px";
    canvas.style.top = event.clientY - size/2 + "px";
    container.appendChild(canvas);

})