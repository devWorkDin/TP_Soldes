document.addEventListener("DOMContentLoaded",()=>{
    console.log('hey')
    let i = 0

    let el = document.querySelector(".gain")

    let debut = Number(prompt("Mettre de l'argent pour votre capital de départ"))
    let gain = document.querySelector(".buta")
    let loss = document.querySelector(".butc")
    let reset = document.querySelector(".butb")
    el.innerText = `${debut} $`
    
    let gagner =()=>{
        
        let debut_1 = Number(prompt("Mettre de l'argent"))
        debut = debut_1+debut
        el.innerHTML = `${debut} $<br>
        Vous avez fait un dépot de ${debut_1}$`

        if(debut>0){
            el.classList.add("gain")
            el.classList.remove("perte")
        }else{
            el.classList.remove("gain")
            el.classList.add("perte")
        }
    }
    let perdre =()=>{
    
        let perte = Number(prompt("Soutirer de l'argent"))
            if(perte>=20&&perte<=100){
                let conf =confirm("Confirmer votre retrait")
                if(conf){
                    debut = debut-perte
                    el.innerHTML = `${debut} $<br>
                    Vous avez fait un retrait de ${perte}$`
                    if(debut>0){
                        el.classList.add("gain")
                        el.classList.remove("perte")
                    }else{
                        el.classList.remove("gain")
                        el.classList.add("perte")
                    }
                }else{
                       el.innerText = "Opération annulée"
                        el.classList.remove("gain")
                        el.classList.add("perte")
                }
             
        
       
            }
            else{
                alert("Le montant du retrait doit etre compris entre 20 et 100")
            }
}
  
    gain.addEventListener("click",()=>{
       gagner()
       console.log(debut)

    })

    loss.addEventListener("click",()=>{
        perdre()
        console.log(debut)
     })
    
     reset.addEventListener("click",()=>{
         debut = 0
         el.innerText = `${debut} $`
            
         console.log("hey")
     })
 


    })