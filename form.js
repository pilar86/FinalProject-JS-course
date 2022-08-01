/* CORRIEGIENDO ARCHIVOS



const nombre = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  
  
    parrafo.innerHTML = ""

    
    if(nombre.value.length <5){
        warnings += `El nombre NO es válido! <br>`
        enviar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email NO es válido! <br>`
        enviar = true
    }
   

    if(enviar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

