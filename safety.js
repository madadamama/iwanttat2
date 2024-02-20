document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = 'tattoo.pdf';
    const pdfViewer = document.getElementById('pdf-viewer');

    pdfjsLib.getDocument(pdfUrl).then(function (pdfDocument) {
        let imageDisplayed = false;

        pdfViewer.addEventListener('scroll', function () {
            const currentPage = Math.floor(pdfViewer.scrollTop / pdfViewer.clientHeight) + 1;

            if (currentPage >= 2 && !imageDisplayed) {
                // Display the image
                const image = new Image();
                image.src = 'great.png';
                image.classList.add('displayed-image');
                document.body.appendChild(image);

                // Set a flag to prevent displaying the image multiple times
                imageDisplayed = true;
            }
        });
    });
});
