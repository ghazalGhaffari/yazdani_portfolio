
document.addEventListener("DOMContentLoaded", function() {
    const showCardButton = document.getElementById('guide-btn');
    const popupCard = document.getElementById('navigation');
  
    // Function to show the card
    function showCard() {
      popupCard.classList.add("show");
    }
  
    // Function to hide the card
    function hideCard() {
      popupCard.classList.remove("show");
    }
  
    // Event listener for the button to show the card
    showCardButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent click from propagating to the document
      showCard();
    });
  
    // Event listener for clicks on the document to hide the card if clicked outside
    document.addEventListener("click", function(event) {
      if (!popupCard.contains(event.target) && !showCardButton.contains(event.target)) {
        hideCard();
      }
    });
  
    // Prevent clicks inside the card from propagating to the document
    popupCard.addEventListener("click", function(event) {
      event.stopPropagation();
    });
});
  