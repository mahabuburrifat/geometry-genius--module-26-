/*
function caculateParallelogramArea(){
    const baseInput = document.getElementById('parallelogram-base')
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log('base is:', base);

    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log('height is:',height);

    const area = base * height;
    console.log('Area is the parallelogram is:', area);
    
    const parallelogramSpan = document.getElementById('parallelogram-area')
    parallelogramSpan.innerText = area;
}
*/

// ----------call function-----------

function caculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height =getInputValueById('parallelogram-height');
    const area = base * height;
    console.log('Area of the parallelogram is:', area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function  setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}