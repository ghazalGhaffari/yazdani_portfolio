document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', handleKeyDown);
});

function handleKeyDown(event) {
    const currentPage = window.location.pathname.match(/(\D+)(\d+)\.html/);
    if (!currentPage) return;
    
    const prefix = currentPage[1];
    const currentNumber = parseInt(currentPage[2], 10);

    switch(event.key) {
        case 'ArrowRight':
            navigateToPage(prefix, currentNumber + 1);
            break;
        case 'ArrowLeft':
            navigateToPage(prefix, currentNumber - 1);
            break;
    }
}

function navigateToPage(prefix, number) {
    const nextPage = `${prefix}${number}.html`;
    fetch(nextPage)
        .then(response => {
            if (response.ok) {
                window.location.href = nextPage;
            } else {
                console.warn('Page does not exist:', nextPage);
            }
        })
        .catch(error => console.error('Error fetching the page:', error));
}

// Event listeners for control buttons
document.getElementById('preBtn__hovered').addEventListener('click', function() {
    const currentPage = window.location.pathname.match(/(\D+)(\d+)\.html/);
    if (!currentPage) return;

    const prefix = currentPage[1];
    const currentNumber = parseInt(currentPage[2], 10);
    navigateToPage(prefix, currentNumber - 1);
});
document.getElementById('nextBtn__hovered').addEventListener('click', function() {
    const currentPage = window.location.pathname.match(/(\D+)(\d+)\.html/);
    if (!currentPage) return;

    const prefix = currentPage[1];
    const currentNumber = parseInt(currentPage[2], 10);
    navigateToPage(prefix, currentNumber + 1);
});
document.getElementById('homeBtn__hovered').addEventListener('click', function() {
    window.location.href = `intro3.html`;
});
document.getElementById('profileBtn__hovered').addEventListener('click', function() {
    window.location.href = `intro1.html`;
});