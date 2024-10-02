function playMusic() {
    var audio = document.getElementById('music');
    var message = document.getElementById('message');
    
    // Verifica si la música está cargada y en pausa para reproducirla
    if (audio.paused) {
        audio.play();
        message.innerHTML = "La melodía del amor eterno ha comenzado...";
    } else {
        audio.pause();
        message.innerHTML = "La melodía ha sido pausada.";
    }
    
    // Muestra el mensaje con efecto
    message.style.opacity = 1;
}
