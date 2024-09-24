// creating common function for active and non-active button
function showSectionById(id){
  // hide all the section
  document.getElementById('donationSection').classList.add('hidden')
  document.getElementById('historySection').classList.add('hidden')
  //show the section with provide id as parameter
  document.getElementById(id).classList.remove('hidden')
}
// active history button and color
document.getElementById('historyBtn').addEventListener('click',function(){
  historyBtn.classList.add('bg-[#ABD36B]')
  document.getElementById('donationBtn').classList.remove('bg-[#ABD36B]')
  showSectionById('historySection')
})
// active donation button and color
document.getElementById('donationBtn').addEventListener('click',function(){
  donationBtn.classList.add('bg-[#ABD36B]')
  document.getElementById('historyBtn').classList.remove('bg-[#ABD36B]')
  showSectionById('donationSection')
})

// Donation handling function
function handleDonation(cardId) {
  const inputValue = parseFloat(document.getElementById(`input-value-${cardId}`).value);
  let totalBalance = parseFloat(document.getElementById(`totalDonation-${cardId}`).innerText);
  let mainBalance = parseFloat(document.getElementById('main-balance').innerText); 
  
  if (inputValue > 0 && !isNaN(inputValue) && mainBalance>inputValue) {
      totalBalance += inputValue;
      mainBalance -= inputValue;

      // Update the donation amount for the specific card
      document.getElementById(`totalDonation-${cardId}`).innerText = totalBalance + ' BDT';
      document.getElementById('main-balance').innerText = mainBalance + ' BDT';

      // Update the modal with the donation amount
      document.getElementById('modal-amount').innerText = inputValue + ' BDT';

      // Add donation to history
      // Find the parent card element by going up two levels from the donate button
      const parentCard = document.getElementById(`input-value-${cardId}`).parentElement.parentElement;

// Find the card title within the parent card
      const cardTitle = parentCard.querySelector('.card-title').innerText;
      const historyItem = document.createElement('div');
      historyItem.classList.add('border', 'border-gray-300', 'mt-2', 'p-2', 'rounded-lg', 'shadow-sm', 'md:mt-4');
      const currentDateTime = new Date();
      historyItem.innerHTML = `<strong>${inputValue} BDT for "${cardTitle}"</strong><br>${currentDateTime.toLocaleString()}`;
      document.getElementById('history-item').appendChild(historyItem);


      // Show the modal
      document.getElementById('successModal').classList.remove('hidden');

      // Clear input value
      document.getElementById(`input-value-${cardId}`).value = '';
  } else {
      // Error alert for invalid or negative input
      alert('Please enter a valid positive number.');
  }
}

// Close modal
document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('successModal').classList.add('hidden');
});

// Donate buttons
const donateButtons = document.querySelectorAll('.donate-btn');

// Loop through the NodeList
for (let i = 0; i < donateButtons.length; i++) {
  // Add event listener to each button
  donateButtons[i].addEventListener('click', function() {
      const cardId = this.getAttribute('data-card');
      handleDonation(cardId);
  });
}