
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

//donation amount setting
const donateBtn = document.getElementById('donate-btn');
//common function
function handleDonation(cardId) {
    const inputValue = parseFloat(document.getElementById(`input-value-${cardId}`).value);
    let totalBalance = parseFloat(document.getElementById(`totalDonation-${cardId}`).innerText)
    let mainBalance = parseFloat(document.getElementById('main-balance').innerText); 
    
    if (inputValue > 0 && !isNaN(inputValue)) {
        totalBalance += inputValue;
        mainBalance -= inputValue;

        // Update the donation amount for the specific card
        document.getElementById(`totalDonation-${cardId}`).innerText = totalBalance + ' BDT';
        document.getElementById('main-balance').innerText = mainBalance + ' BDT';

        // Update the modal with the donation amount
        document.getElementById('modal-amount').innerText = inputValue + ' BDT';

        // Show the modal
        document.getElementById('successModal').classList.remove('hidden');

        // Clear input value
        document.getElementById(`input-value-${cardId}`).value = '';
    } else {
        // error alert for invalid or negative input
        alert('Please enter a valid positive number.');
    }
}

// Close modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('successModal').classList.add('hidden');
});

// Add event listeners to all donate buttons
document.querySelectorAll('.donate-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const cardId = this.getAttribute('data-card');
        handleDonation(cardId);
    });
});
