burger= document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navList=document.querySelector('.nav-list')



burger.addEventListener('click',()=>{

    navbar.classList.toggle('v-classres');
    navList.classList.toggle('v-classres');
    navbar.classList.toggle('h-navres');
})