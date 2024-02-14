function calculateRectangleArea(){
    // ------------get width of rectangle-----------
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log('width is:',width);

    // ---------get length of rectangle--------
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log('length is:',length);

    // -------- calculation part------------
    const area = width * length;
    console.log('Area of the rectangle is:',area);

    // --------rectangle area----------
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}