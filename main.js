
function closeMenu(){
    menu=document.querySelector("#mid-nav")
    menu.className="mid-nav animate__animated animate__slideOutUp"
    pass
    menu.style.display="none"
    
}


function openMenu(){
    menu=document.querySelector("#mid-nav")
    menu.style.display="block"
    menu.className="mid-nav animate__animated animate__slideInDown"
}