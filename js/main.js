const menu= document.querySelector('#menu');
const dropdowm= document.querySelector('#drop-down');
const drop_down= document.querySelector('.dropdown-content-background')
const sidebar= document.querySelector('.sidebar');



console.log(sidebar);
console.log(dropdowm);
console.log(menu);
menu.addEventListener('click', function (){
    sidebar.classList.toggle('show-sidebar')
});
dropdowm.addEventListener('click', function (){
    drop_down.classList.toggle('show-dropdown')
});

