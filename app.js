const shuttle = document.querySelector("#shuttle");
const laser = document.querySelector("#laser");
let i = 5

const initial=()=>{
        laser.style.display=""    
        laser.classList.add("animation")
        setTimeout(function (){
            laser.classList.remove("animation")  
            
        },1000)
        
    }
 
window.addEventListener("keydown", function(e){
    console.log(e.keyCode)
    let numero=e.keyCode;
    let unite = 10

    
    if(numero==32){
        initial()
        
    }
    
    if(numero==37){
        if(i<=0){
            unite=0
        }else{
        i--;
        shuttle.style.left=`${unite*i}%`;
        laser.style.left=`${unite*i+1.5}%`; 
        }

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
