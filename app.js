const shuttle = document.querySelector("#shuttle");
let i = 5
window.addEventListener("keydown", function(e){
    console.log(e.keyCode)
    let numero=e.keyCode;
    let unite = 10
    
    if(numero==37){
        if(i<=0){
            unite=0
        }
        i--;
        shuttle.style.left=`${unite*i}%`; 
    }else if(numero==39){
        if(i>=9){
            i=9
        }else{
        i++;
        shuttle.style.left=`${unite*i}%`;    
        }
    }
 
})