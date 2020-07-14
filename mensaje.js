/* Script en JS para enviar el mensaje confirmación al presionar el botón Ingresar datos*/

function ingresar (){

    /* Acá se declaran las variables para guardar los datos ingresados por el usuario */
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let ciudad=document.getElementById('ciudad').value;
    let email=document.getElementById('email').value;

    /* Acá desplegamos el mensaje con el contenido de las variable anteriormente declaradas */    
    alert("Bienvenido "+nombre+" "+apellido+" se ha enviado un mail de confirmacion a "+email);
    return false;
}