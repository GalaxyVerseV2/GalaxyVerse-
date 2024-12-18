<script>
    document.getElementById('feedbackButton').onclick = function() {
        const feedback = prompt("Enter your username and then your feedback (EX: Nate123 - Add more games)");
        if (feedback) {
            sendFeedback(feedback);
        } else {
            alert("Feedback cannot be empty.");
        }
    };

    function sendFeedback(feedback) {
        const webhookUrl = 'https://discord.com/api/webhooks/1310025772588732487/NBeW92ka5y-3tF851T4CplINNtDczQpPIu1Q9bmC-AudM0WEoM_ApcE7e6nSYdch2vO1'; // Replace with your actual webhook URL
        const payload = {
            content:  ` ||****Feedback Log:****|| ${feedback}` // Format the message for Discord
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                alert("Feedback request has been sent. Thank you");
            } else {
                alert("There was an error sending your feedback. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error sending your feedback. Please try again.");
        });
    }

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
    }

    // Dark mode toggle function
    document.getElementById('toggleButton').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');

        // Save the current theme in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Retrieve stored panic key and URL from localStorage
    const storedKey = localStorage.getItem('panicKey');
    const storedUrl = localStorage.getItem('panicUrl');

    // Set the retrieved values to inputs if they exist
    if (storedKey) {
        document.getElementById('keyInput').value = storedKey;
    }
    if (storedUrl) {
        document.getElementById('urlInput').value = storedUrl;
    }

    // Function to set the panic key and URL
    document.getElementById('setPanicButton').addEventListener('click', function() {
        const panicKey = document.getElementById('keyInput').value;
        const panicUrl = document.getElementById('urlInput').value;

        if (!panicKey || !panicUrl) {
            alert('Please enter both a key and a URL.');
        } else {
            // Store the key and URL in localStorage
            localStorage.setItem('panicKey', panicKey);
            localStorage.setItem('panicUrl', panicUrl);
            alert(`Panic key set to "${panicKey}" and URL set to "${panicUrl}"`);
        }
    });

    // Event listener for keydown event
    document.addEventListener('keydown', function(event) {
        const panicKey = localStorage.getItem('panicKey');
        const panicUrl = localStorage.getItem('panicUrl');

        if (event.key === panicKey) {
            window.location.href = panicUrl; // Redirect to the panic URL
        }
    });

    // Check if user has already created an account
    if (localStorage.getItem('accountCreated')) {
        // Redirect directly to the specified website if account already created
        window.location.href = 'https://galaxyverse.w3spaces.com/homepage.html'; // Redirect URL
    }

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you can handle the form submission, e.g., send the data to your server
        console.log('Account Created:', { name, email, password });

        // Set account created flag in localStorage
        localStorage.setItem('accountCreated', 'true');

        // Redirect to the specified website
        window.location.href = 'https://galaxyverse.w3spaces.com/homepage.html'; // Redirect URL
    });
</script>
