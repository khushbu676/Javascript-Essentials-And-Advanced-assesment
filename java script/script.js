
const bookingType = document.getElementById('bookingType');
const dateSection = document.getElementById('dateSection');
const timeSection = document.getElementById('timeSection');
const slotSection = document.getElementById('slotSection');


bookingType.addEventListener('change', handleBookingTypeChange);

// Function to handle changes in the booking type
function handleBookingTypeChange() {
    const selectedType = bookingType.value;

    // Reset the display of all sections
    dateSection.style.display = 'none';
    timeSection.style.display = 'none';
    slotSection.style.display = 'none';

    // Create elements based on selected booking type
    switch (selectedType) {
        case 'full-day':
            // Full day booking: Show only date
            dateSection.style.display = 'block';
            break;
        case 'half-day':
            // Half day booking: Show date and slot options
            dateSection.style.display = 'block';
            slotSection.style.display = 'block';
            break;
        case 'hourly':
            // Hourly booking: Show date and time
            dateSection.style.display = 'block';
            timeSection.style.display = 'block';
            break;
    }
}

// Trigger the event to handle default state
handleBookingTypeChange();
