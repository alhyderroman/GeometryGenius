function calculateTriangleArea(){
    const triangleBase=document.getElementById('triangle-base').value;
    const base=parseFloat(triangleBase);
   const triangleHeight=document.getElementById('triangle-height').value;
   const height=parseFloat(triangleHeight);
   
   const area=0.5*base*height;
  //display area
  const triangleArea= document.getElementById('triangle-area');
  triangleArea.innerText=area;
  

}