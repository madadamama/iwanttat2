function openPopups(popupUrl) {
    window.open(popupUrl, "_blank", "width=600, height=600");
}
function openPopup(instagramUrl) {
    instagramWindow = window.open(instagramUrl, "_blank", `width=600, height=600, left=${window.screenX + offsetX}, top=${window.screenY + offsetY}`);
}