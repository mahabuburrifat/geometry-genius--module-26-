function caculatePentagonArea(){
     const perimeter = getInputValueById('pentagon-perimeter');
     const apothem = getInputValueById('pentagon-apothem');
     const area = 0.5 * perimeter * apothem;
     console.log('Area of the pentagon is:', area);

    setPentagonSpanId('pentagon-span-area',area);

}
 function getInputValueById(elementId){
    const inputField = document.getElementById(elementId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
 }
 function setPentagonSpanId(elements, text){
    const element = document.getElementById(elements);
    element.innerText = text;
 }