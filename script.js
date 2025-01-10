document.getElementById('calculateButton').addEventListener('click', function() { 
    const eventType = document.getElementById('eventType').value;
    const guestCount = Number(document.getElementById('guestCount').value);  // Convert to number
    const duration = Number(document.getElementById('duration').value);      // Convert to number

    // Check if guestCount and duration are valid numbers
    if (isNaN(guestCount) || isNaN(duration) || guestCount <= 0 || duration <= 0) {
        document.getElementById('budgetResult').textContent = "Please fill out all fields with valid values.";
        return;
    }

    let baseCost = 0;
    let perPersonCost = 0;
    let perHourCost = 0;

    // Set base costs and per person costs for different events
    switch (eventType) {
        case "wedding":
            baseCost = 5000;
            perPersonCost = 100;
            perHourCost = 200;
            break;
        case "corporate":
            baseCost = 3000;
            perPersonCost = 80;
            perHourCost = 150;
            break;
        case "party":
            baseCost = 1000;
            perPersonCost = 50;
            perHourCost = 100;
            break;
        case "customized":
            baseCost = 2000;
            perPersonCost = 70;
            perHourCost = 150;
            break;
        case "consultation":
            baseCost = 500;
            perPersonCost = 0;
            perHourCost = 100;
            break;
        case "venue":
            baseCost = 1500;
            perPersonCost = 0;
            perHourCost = 50;
            break;
        case "catering":
            baseCost = 2000;
            perPersonCost = 40;
            perHourCost = 0;
            break;
        case "entertainment":
            baseCost = 800;
            perPersonCost = 0;
            perHourCost = 200;
            break;
        case "decoration":
            baseCost = 1000;
            perPersonCost = 0;
            perHourCost = 0;
            break;
    }

    // Calculate total budget
    const totalCost = baseCost + (perPersonCost * guestCount) + (perHourCost * duration);

    // Display result only if totalCost is greater than zero
    if (totalCost > 0) {
        document.getElementById('budgetResult').textContent = `Estimated Budget: $${totalCost.toFixed(2)}`;
    } else {
        document.getElementById('budgetResult').textContent = "Estimated Budget: $0.00";
    }
});

document.getElementById('sendMessageButton').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const contactStatus = document.getElementById('contactStatus');
    const modal = document.getElementById('popupModal');
    const modalMessage = document.getElementById('modalMessage');

    // Validate inputs
    if (!name || !email || !message) {
        contactStatus.textContent = 'Please fill in all fields.';
        contactStatus.style.color = 'red';
        return;
    }

    // Update contact status and show modal
    contactStatus.textContent = 'Sending your message...';
    contactStatus.style.color = 'blue';

    setTimeout(() => {
        modalMessage.textContent = 'Thank you! Your message has been sent.';
        modal.style.display = 'flex'; // Show the modal

        // Clear the form and contact status after submission
        document.getElementById('contactForm').reset();
        contactStatus.textContent = '';
    }, 500);
});

// Close the modal
document.getElementById('closeModalButton').addEventListener('click', function () {
    const modal = document.getElementById('popupModal');
    modal.style.display = 'none'; // Hide the modal
});