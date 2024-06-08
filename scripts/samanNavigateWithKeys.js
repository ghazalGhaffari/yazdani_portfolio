
//// use arrow keys to navigate

document.addEventListener('DOMContentLoaded', function() {
    // Get the current page number from the URL
    const currentPage = parseInt(window.location.pathname.match(/(\d+)/)[0]);
    const totalPages = 4;

    // Function to navigate to a specific page
    function navigateToPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            window.location.href = `samanBank${pageNumber}.html`;
        }
    }

    // Event listener for arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            navigateToPage(currentPage - 1);
        } else if (event.key === 'ArrowRight') {
            navigateToPage(currentPage + 1);
        }
    });

    // Event listeners for control buttons
    document.getElementById('preBtn__hovered').addEventListener('click', function() {
        navigateToPage(currentPage - 1);
    });
    document.getElementById('nextBtn__hovered').addEventListener('click', function() {
        navigateToPage(currentPage + 1);
    });
    document.getElementById('homeBtn__hovered').addEventListener('click', function() {
        window.location.href = `intro3.html`;
    });
    document.getElementById('profileBtn__hovered').addEventListener('click', function() {
        window.location.href = `intro1.html`;
    });
    
    // // Event listener for click anywhere on the page to go to the next page
    // function navigateToPageByClick(pageNumber) {
    //     if (pageNumber >= 1 && pageNumber <= totalPages) {
    //         window.location.href = `samanBank${pageNumber}.html`;
    //     }
    // }
    // document.addEventListener('click', function(event) {
    //     if (event.target) {
    //         navigateToPage(currentPage + 1);
    //     }
    // });
});

// return btn function to go back to the first page
document.getElementById('returnBtn').addEventListener('click', function() {
    window.location.href = 'graphic.html';
});
