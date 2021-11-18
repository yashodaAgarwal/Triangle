
const sides=document.querySelectorAll(".side-input");
const areaBtn=document.querySelector(".calculate-area");
const outputElement=document.querySelector("#output");

function calculateAreaOfTriangle(a,b){
    const area=(1/2)*a*b;
    return area;
}

function calculateArea(){
    const area=calculateAreaOfTriangle(Number(sides[1].value),Number(sides[1].value))
    // console.log(area);
    outputElement.innerText="Area is "+area;
}

areaBtn.addEventListener("click",calculateArea);