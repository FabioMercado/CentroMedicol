
const usernav= document.getElementById("usernav");
const close=document.getElementById("close");
let username =JSON.parse(localStorage.getItem("user"))
if(username!=null){
    usernav.innerHTML= '<a href="#" id="#" class="nav-link">'+username[0].usuario+'</a>'
    
}else{
    location.href="../index.html"
  
}
close.addEventListener('click',function(){

    localStorage.clear('user')
    location.href="../index.html"
    
});
