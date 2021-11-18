const inputs=document.querySelectorAll(".angle-input");
const isTrianglebtn=document.querySelector("#is-triangle-btn");

const outputElement=document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;
}


function isTriangle(){
    const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180){
        outputElement.innerText="The entered angles forms a traingle !!";
        
    }else{
        outputElement.innerText="The entered angles doesn't forms a triangle";
        
    }
}

isTrianglebtn.addEventListener("click",isTriangle);