// This script handles the passport generation form and card display

// Set the maximum date for the birthdate input to today's date
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];
});

// Handle form submission
document.getElementById('passport-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form input values
    const fullName = document.getElementById('full-name').value.trim();
    const idCard = document.getElementById('id-card').value.trim();

    // Generate passport number and release date
    const passportNumber = generatePassportNumber(fullName, idCard);
    const releaseDate = generateRandomDate();

    // Display passport information
    document.getElementById('display-full-name').textContent = fullName;
    document.getElementById('display-id-card').textContent = idCard;
    document.getElementById('display-passport-number').textContent = passportNumber;
    document.getElementById('display-release-date').textContent = releaseDate;

    // Hide form and show passport card
    document.getElementById('passport-form').classList.add('hidden');
    document.getElementById('passport-card').classList.remove('hidden');
});

// Generate a random passport number based on name and ID
function generatePassportNumber(fullName, idCard) {
    const nameInitials = fullName.substring(0, 2).toUpperCase();
    const idInitials = idCard.substring(0, 2);
    const randomPart = `${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}-${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}`;

    return `${nameInitials}${idInitials}-${randomPart}`;
}

// Get a random character (letter or number)
function getRandomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

// Function to generate a random date between 2010-01-01 and today
function generateRandomDate() {
    // Set the start date to January 1, 2010
    const start = new Date(2010, 0, 1);
    // Set the end date to today
    const end = new Date();
    // Generate a random date between start and end
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // Convert the date to ISO string and extract the date part (YYYY-MM-DD)
    const dateStr = date.toISOString().split('T')[0];
    // Return the formatted date string
    return `${dateStr}`;
}
