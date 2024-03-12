  // Add event listener for scroll
  window.addEventListener('scroll', function() {
    var jumpUpElement = document.getElementById('jumpUpElement');
    var scrollPosition = window.scrollY;
    var triggerPosition = 300; // Adjust this value as needed

    // If scroll position is greater than trigger position, show the element
    if (scrollPosition > triggerPosition) {
      jumpUpElement.classList.remove('hidden');
      jumpUpElement.classList.add('visible');
    } else {
      // Otherwise, hide the element
      jumpUpElement.classList.remove('visible');
      jumpUpElement.classList.add('hidden');
    }
  });