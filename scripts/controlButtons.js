
// Event listener for the control buttons

document.addEventListener('DOMContentLoaded', function() {
    // Get the current page number from the URL
    const currentPage = parseInt(window.location.pathname.match(/(\d+)/)[0]);
    const totalPages = 3;

    // Event listeners for control buttons
    document.getElementById('preBtn__hovered').addEventListener('click', function() {
        navigateToPage(currentPage - 1);
    });

    document.getElementById('nextBtn__hovered').addEventListener('click', function() {
        navigateToPage(currentPage + 1);
    });

    document.getElementById('profileBtn__hovered').addEventListener('click', function() {
        window.location.href = `intro2.html`;
    });

    document.getElementById('homeBtn__hovered').addEventListener('click', function() {
        window.location.href = `intro3.html`;
    });
});
