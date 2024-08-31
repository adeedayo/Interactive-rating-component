'use strict';
document.addEventListener('DOMContentLoaded', function() {
    let selectedRating = null;

    const ratingOptions = document.querySelectorAll('.rating-option');
    const submitButton = document.getElementById('submit-button');
    const surveyForm = document.getElementById('survey-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const selectedRatingText = document.getElementById('selected-rating');

    ratingOptions.forEach(option => {
        option.addEventListener('click', function() {
            ratingOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedRating = this.getAttribute('data-value');
        });
    });

    submitButton.addEventListener('click', function() {
      document.getElementById('submit-button').style.backgroundColor='white';
        if (selectedRating) {
            selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
            surveyForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
            
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});