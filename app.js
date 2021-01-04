const shuttle = document.querySelector("#shuttle");
const laser = document.querySelector("#laser");
let i = 5
window.addEventListener("keydown", function(e){
    console.log(e.keyCode)
    let numero=e.keyCode;
    let unite = 10

    if(numero==32){
    laser.classList.remove("show")    
    laser.classList.add("animation")
    }
    
    if(numero==37){
        if(i<=0){
            unite=0
        }
        i--;
        shuttle.style.left=`${unite*i}%`;
        laser.style.left=`${unite*i+1.5}%`; 
    }else if(numero==39){
        if(i>=9){
            i=9
        }else{
        i++;
        shuttle.style.left=`${unite*i}%`;
        laser.style.left=`${unite*i+1.5}%`;    
        }
    }

 
})
