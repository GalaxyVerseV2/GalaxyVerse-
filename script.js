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
    </script>

</body>
</html>
