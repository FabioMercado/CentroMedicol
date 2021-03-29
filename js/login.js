
const form=document.getElementById("form");
const username= document.getElementById("usuario");
const contraseña= document.getElementById("contraseña");
 
form.addEventListener("submit",function(event){
  
    event.preventDefault();
    let users= Array(
        {
            usuario: username.value,
            contraseña: contraseña.value


        }
    )

   console.log(users);
   localStorage.setItem('user',JSON.stringify(users))
   location.href="html/inicio.html"

});