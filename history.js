document.addEventListener("DOMContentLoaded", function() {
    const historyLink = document.getElementById("history-link");

    historyLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Open a new window with the history page
        window.open("history.html", "historyPopup", "width=600,height=400,scrollbars=yes");
    });
});