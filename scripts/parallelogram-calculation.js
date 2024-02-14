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