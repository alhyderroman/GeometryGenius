function calculateEllipseArea(){
    const lengthMajor=getInputValueById('length-major');
    const lengthMinor=getInputValueById('length-minor');
    const area=3.1416*lengthMajor*lengthMinor;
    setInnerTextById('ellipse-area',area);
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