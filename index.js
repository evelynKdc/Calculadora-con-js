const buttons= document.querySelectorAll("button");
const actualOperation = document.querySelector(".actual-number");
const buffer = document.querySelector(".recent");

buttons.forEach(x=>{
    //console.log(x.value);
    x.addEventListener('click', ()=>{organizeInformation(x.value)});
})

// document.getElementById("#recent").addEventListener("click", document.s);



function organizeInformation(information) {
    // if (actualOperation.innerHTML.toString() !== "0" && buffer.innerHTML.toString() !== ".") {
    //     actualOperation.innerHTML=" ";
    //     buffer.innerHTML=".";
    // }

    if (buffer.innerHTML.toString() == "." && actualOperation.innerHTML.toString() == "0") {
        buffer.innerHTML=".";
        actualOperation.innerHTML= " "; 
    }

     
    
    if (information == '=') {
       
        let total = eval(actualOperation.innerHTML.toString());
        
        buffer.innerHTML=actualOperation.innerHTML;
        
        return actualOperation.innerHTML= total;

    }

    actualOperation.innerHTML+= information;

    if (information == 'clearAll') {
       
        actualOperation.innerHTML="0";
        buffer.innerHTML=".";

    }

    

    if (information == 'c') {
       
        actualOperation.innerHTML=actualOperation.innerHTML.toString().slice(0,-2);

        if (actualOperation.innerHTML==" ") {
            actualOperation.innerHTML="0";
        }
        
    }


    
}