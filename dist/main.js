const initApp=()=>{
    const hamburgerBtn=document.getElementById('hamburger-button')
    const mobilemenu=document.getElementById('mobile-menu')
    const togglemenu=()=>{
        mobilemenu.classList.toggle('hidden')
        mobilemenu.classList.toggle('flex')
    }
    hamburgerBtn.addEventListener('click',togglemenu)
    mobilemenu.addEventListener('click',togglemenu)
}

document.addEventListener('DOMContentLoaded',initApp)