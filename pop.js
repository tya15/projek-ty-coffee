function tekan(){
    var konten = document.getElementById('popUp');
    konten.style.display='block';

    window.onclick=function(event){
        if (event.target==konten){
            konten.style.display='none';
        }
    };
}