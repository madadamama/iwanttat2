document.addEventListener("DOMContentLoaded", function() {
    const introLink1 = document.getElementById("introLink1");
    const introLink2 = document.getElementById("introLink2");
    const introLink3 = document.getElementById("introLink3");
    const introLink4 = document.getElementById("introLink4");
    const introLink5 = document.getElementById("introLink5");
    const introLink6 = document.getElementById("introLink6");
    const introAudio1 = document.getElementById("Ga1");
    const introAudio2 = document.getElementById("Ga2");
    const introAudio3 = document.getElementById("Ga3");
    const introAudio4 = document.getElementById("Ga4");
    const introAudio5 = document.getElementById("Ga5");
    const introAudio6 = document.getElementById("Ga6");
    const videos = document.querySelectorAll(".video-bg");

    introLink1.addEventListener("click", function() {
        toggleAudio(introAudio1);
    });

    introLink2.addEventListener("click", function() {
        toggleAudio(introAudio2);
    });

    introLink3.addEventListener("click", function() {
        toggleAudio(introAudio3);
    });

    introLink4.addEventListener("click", function() {
        toggleAudio(introAudio4);
    });

    introLink5.addEventListener("click", function() {
        toggleAudio(introAudio5);
    });

    introLink6.addEventListener("click", function() {
        toggleAudio(introAudio6);
    });

    videos.forEach(function(video) {
        video.addEventListener("click", function() {
            toggleVideo(video);
        });
    });
});

function openPopupImage(imageUrl) {
    window.open(imageUrl, "popupImage", "width=400, height=400");
}

function toggleAudio(audio) {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
