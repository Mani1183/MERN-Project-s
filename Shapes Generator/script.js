const countInput = document.getElementById('number');
const colorInput = document.getElementById('color');
const shapeSelect = document.getElementById('shape');
const generateBtn = document.getElementById('generateBtn');
const container = document.getElementById('container');

generateBtn.addEventListener('click', function(){
    const count = Number(countInput.value);
    const color = colorInput.value;
    const shape = shapeSelect.value;

    if (count<=0 || count>100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    container.innerHTML = '';

    for(let i=0; i<count; i++){
        const newElement = document.createElement('div');
        newElement.classList.add('newElement');
        newElement.style.backgroundColor = color;

        if(shape === 'circle'){
            newElement.style.width = '100px';
            newElement.style.height = '100px';
            newElement.style.borderRadius = '50%';
        }        
        else if(shape === 'square'){
            newElement.style.width = '100px';
            newElement.style.height = '100px';
        }
        else if(shape === 'rectangle'){
            newElement.style.width = '150px';
            newElement.style.height = '100px';
        }
        container.appendChild(newElement);
    }
});