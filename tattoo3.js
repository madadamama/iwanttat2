document.addEventListener("DOMContentLoaded", function () {
    addClickHandler("img1", null, 'popup1.html');
    addClickHandler("img2", "audio1", 'popup2.html');
    addClickHandler("img3", null, 'popup3.html');
    addClickHandler("img4", "audio4", 'popup4.html');
    addClickHandler("img5", null, 'popup5.html');
    addClickHandler("img6", "audio6", 'popup6.html');
    addClickHandler("img7", "audio7", 'popup7.html');
    addClickHandler("img8", "audio8", 'popup8.html');
    addClickHandler("img9", "audio9", 'popup9.html');
    addClickHandler("img10", "audio10", 'popup10.html');
    addClickHandler("img11", "audio11", 'popup11.html');
    addClickHandler("img12", null, 'popup12.html');
    addClickHandler("img13", "audio13", 'popup13.html');
    addClickHandler("img14", "audio14", 'popup14.html');
    addClickHandler("img15", "audio15", 'popup15.html');
    addClickHandler("img16", null, 'popup16.html');
    addClickHandler("img17", null, 'popup17.html');
    addClickHandler("img18", null, 'popup18.html');
    addClickHandler("img19", "audio19", 'popup19.html');
    addClickHandler("img20", null, 'popup20.html');
    addClickHandler("img21", "audio21", 'popup21.html');
    addClickHandler("img22", null, 'popup22.html');
    addClickHandler("img23", null, 'popup23.html');
    addClickHandler("img24", null, 'popup24.html');
    // Add click handlers for other images, audio elements, and popup HTML files as needed

    function addClickHandler(imageId, audioId, popupHtmlFile) {
        const image = document.getElementById(imageId);
        const audio = audioId ? document.getElementById(audioId) : null;

        image.addEventListener("click", function () {
            // Play or pause audio
            if (audio) {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            }

            // Open a popup window with the specified HTML file if provided
            if (popupHtmlFile) {
                const popupUrl = window.location.href.replace('tattoo3.html', popupHtmlFile);
                const popupWindow = window.open(popupUrl, "_blank", "width=400, height=400");

                // Add event listener to handle unload event for the popup window
                popupWindow.addEventListener("unload", function () {
                    // Send a message to stop the audio to the main window
                    window.postMessage({ action: "stopAudio", audioId: audioId }, "*");
                });

                // Add event listener to handle blur event for the popup window
                popupWindow.addEventListener("blur", function () {
                    // Stop the audio when the popup window loses focus
                    if (audio) {
                        audio.pause();
                    }
                });
            }
        });
    }
});
