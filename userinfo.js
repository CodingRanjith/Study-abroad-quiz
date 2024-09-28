// Display user's name and points from session storage
document.querySelector('span.name').textContent = sessionStorage.getItem('name') || 'Guest';
document.querySelector('span.points').textContent = sessionStorage.getItem('points') || '0';

// Function to handle the submission of score
function submitScore() {
    // Get user details from session storage
    const name = sessionStorage.getItem('name') || 'Guest';
    const email = sessionStorage.getItem('email') || 'Not Provided';
    const mobile = sessionStorage.getItem('mobile') || 'Not Provided';
    const points = sessionStorage.getItem('points') || '0';

    // Prepare data to send to Google Sheet
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('points', points);

    // Send data to Google Sheet using fetch
    fetch('https://script.google.com/macros/s/AKfycbz7uQMiqFxucDfhGNFz6rj1FlcfmhhbrJGwkpX8wdhRHTe0bWr0XjLtJGHoGg_vqBIt/exec', {
        method: 'POST',
        mode: 'no-cors', // Use 'no-cors' since we are not handling the response
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
    })
    .then(() => {
        // Success SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Score Submitted!',
            text: 'Your score has been submitted successfully!',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the URL when the user clicks 'OK'
                window.location.href = 'https://www.go.study/';
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
        // Error SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'An error occurred while submitting your score. Please try again.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    });
}

// Add event listener to the button
document.getElementById('submitScoreBtn').addEventListener('click', submitScore);
