function calculateRectangleArea(){
    const rectangleWidth=document.getElementById('rectangle-width').value;
    const width=parseFloat(rectangleWidth);
    const rectangleLength=document.getElementById('rectangle-length').value;
    const length=parseFloat(rectangleLength);

    const area=width*length;
    const rectangleArea=document.getElementById('rectangle-area');
    rectangleArea.innerText=area;
    console.log(width);
}