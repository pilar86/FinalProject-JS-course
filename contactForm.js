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
        warnings += `El nombre no es valido <br>`
        enviar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        enviar = true
    }
    if(enviar){
        parrafo.innerHTML = warnings
    }else{
        Swal.fire({
            title: 'Mensaje enviado!',
            text: 'Revise su casilla de correo',
            icon:'success',
            timer:5000
         });
    }
})



/*
function envio(){

    Swal.fire({
        title: 'Mensaje enviado!',
        text: 'Revise su casilla de correo',
        icon:'success'
     });
}

/*btn_enviar.addEventListener('click', obtener_datos);




/*let obtener_datos = () => {
    let error_validacion = validar();

    if (!error_validacion) {


            swall.fire({
                title: 'Mensaje enviado!',
                text: 'Revise su casilla de correo',
                icon:'success'
            })

    } else {

            swall.fire({
                title:'Consulta NO enviada!',
                text: 'Verifique todos los campos',
                icon: 'warning'
            })

    }
};
*/
