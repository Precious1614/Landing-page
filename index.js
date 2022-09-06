const sideMenu = document.querySelector('.navlist');
const menuBtn = document.querySelector('.sidemenu');
const close = document.querySelector('.cancelmenu')


menuBtn.addEventListener('click' , ()=> {
    sideMenu.style.display='block'
})
close.addEventListener('click', ()=>{
    sideMenu.style.display='none'
})
