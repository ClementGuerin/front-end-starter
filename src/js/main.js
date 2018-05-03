// Menu Desktop

var btnOpenMD = document.querySelector('.btn-open-md');
var btnCloseMD = document.querySelector('.btn-close-md');

btnOpenMD.addEventListener('click', function(){
    document.querySelector('.menu-md').classList.remove('close-menu');
    document.querySelector('.menu-md').classList.add('open-menu');
})

btnCloseMD.addEventListener('click', function(){
    document.querySelector('.menu-md').classList.remove('open-menu');
    document.querySelector('.menu-md').classList.add('close-menu');
})

// Menu Smartphone

var btnOpenSM = document.querySelector('.btn-open-sm');
var btnCloseSM = document.querySelector('.btn-close-sm');

btnOpenSM.addEventListener('click', function(){
    document.querySelector('.menu-sm').classList.remove('close-menu');
    document.querySelector('.menu-sm').classList.add('open-menu');
})

btnCloseSM.addEventListener('click', function(){
    document.querySelector('.menu-sm').classList.remove('open-menu');
    document.querySelector('.menu-sm').classList.add('close-menu');
})

// Reset class

window.addEventListener('resize', function(){
    document.querySelector('.menu-md').classList.remove('open-menu');
    document.querySelector('.menu-md').classList.remove('close-menu');
    document.querySelector('.menu-sm').classList.remove('open-menu');
    document.querySelector('.menu-sm').classList.remove('close-menu');
})