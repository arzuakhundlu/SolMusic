

var sideMenu = document.getElementById('sideMenu');


$('#openIco').click(function(){
    if(sideMenu.style.height ==="100%"){
        sideMenu.style.height = "0%"
    }
    else{
        sideMenu.style.height ="100%"
    }
})