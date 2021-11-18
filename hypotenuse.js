
const sides=document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#calculate-hypotenuse");
const outputElement=document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares=a*a+b*b;
    return sumOfSquares;
}

function calculateHyotenuse(){
    const sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const actualHypotenuse=Math.sqrt(sumOfSquares);
    outputElement.innerText="The Length of Hypotenuse is "+ actualHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHyotenuse);
