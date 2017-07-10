;(function (){
    var oHtml = document.getElementsByTagName('html')[0];
    var iWinWidth = window.innerWidth?window.innerWidth : document.body.clientWidth;
    var iWidth = (iWinWidth>750?750:iWinWidth)/37.5;
    
    oHtml.style.fontSize = iWidth +'px';
})();
