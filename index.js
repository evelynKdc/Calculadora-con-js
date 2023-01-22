const buttons= document.querySelectorAll("button");
let actualOperation = document.querySelector(".actual-number");
let buffer = document.querySelector(".recent");

buttons.forEach(x=>{
    //console.log(x.value);
    x.addEventListener('click', ()=>{organizeInformation(x.value)});
})

// document.getElementById("#recent").addEventListener("click", document.s);



function organizeInformation(information) {
    if (actualOperation.innerHTML.toString() !== "0" && buffer.innerHTML.toString() !== ".") {
        actualOperation.innerHTML=" ";
        buffer.innerHTML=".";
    }

    if (buffer.innerHTML.toString() == "." && actualOperation.innerHTML.toString() == "0") {
        actualOperation.innerHTML= " "; 
    }

    actualOperation.innerHTML+= information; 
    
    if (information == '=') {
        //let calculado = actualOperation.innerHTML;
       
        let total = eval(actualOperation.innerHTML.toString().slice(0,-1));
        
        buffer.innerHTML=actualOperation.innerHTML;
        actualOperation.innerHTML= total;

    }
    if (information == 'clearAll') {
       
        actualOperation.innerHTML="0";
        buffer.innerHTML=".";

    }
    if (information == 'c') {
       
        actualOperation.innerHTML=actualOperation.innerHTML.toString().slice(0,-2);
        
    }
}