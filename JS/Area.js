
function calculateEllipseArea(){
    const lengthMajor=getInputValueById('length-major');
    const lengthMinor=getInputValueById('length-minor');
    const area=3.1416*lengthMajor*lengthMinor;
    setInnerTextById('ellipse-area',area);
}

function calculateParallelogramArea(){
    const base=getInputValueById('parallelogram-base');
    const height=getInputValueById('parallelogram-height');
    const area=base*height;
    setInnerTextById('parallelogram-area',area);
}
function calculatePentagonArea(){
    const perimeter=getInputValueById('pentagon-perimeter');
    const opothem=getInputValueById('pentagon-opothem');
    const area=0.5*perimeter*opothem;
    setInnerTextById('pentagon-area',area);
}
function calculateRombhusArea(){
    const diagonalOne=getInputValueById('diagonal-one');
    const diagonalTwo=getInputValueById('diagonal-two');
    const area=0.5*diagonalOne*diagonalTwo;
    setInnerTextById('rombhus-area',area);
}












function getInputValueById(inputFieldId){
const inputFieldText=document.getElementById(inputFieldId).value;
const inputFieldValue=parseFloat(inputFieldText);
return inputFieldValue;
}

function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}