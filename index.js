
  // Getting the buttons by their ID
  const donationBtn = document.getElementById('donationBtn');
  const historyBtn = document.getElementById('historyBtn');

  // Define the active background color
  const activeColor = '#ABD36B';
  const inactiveColor = 'transparent';

  // Function to toggle colors
  function toggleColors(clickedButton, otherButton) {
    clickedButton.style.backgroundColor = activeColor;
    otherButton.style.backgroundColor = inactiveColor;
  }

  // Event listeners for both buttons
  donationBtn.addEventListener('click', function(){
    toggleColors(donationBtn, historyBtn);
     window.location.href = 'index.html'
  });

  historyBtn.addEventListener('click', function(){
    toggleColors(historyBtn, donationBtn);
     window.location.href = 'history.html'
  });

