//// refresh the page by pressing R key
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 82 || event.key === r) {
        location.reload();
    }
});