
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

donateBtn.addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    let totalBalance = parseFloat(document.getElementById('totalDonation').innerText)
    if (inputValue > 0 && !isNaN(inputValue)) {
        totalBalance += inputValue;
        // Update the donation amount
        document.getElementById('totalDonation').innerText = totalBalance + ' BDT';
        
        // Update the modal with the donation amount
        document.getElementById('modal-amount').innerText = inputValue;

        // Show the modal
        document.getElementById('successModal').classList.remove('hidden');

        // Clear input value
        document.getElementById('input-value').value = '';
    } else {
        // error alert for invalid or negative input
        alert('Please enter a valid positive number.');
    }
});

// Close modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('successModal').classList.add('hidden');
});
