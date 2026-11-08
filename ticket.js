// TICKET PAGE SCRIPT
// Gets the registration data from localStorage and puts it into the ticket.

        
        // Getting the user's registration data from the form
        // These values were stored during form submission on the login page.
        const savedName = localStorage.getItem("fullName");
        const savedEmail = localStorage.getItem("email");
        const savedGithub = localStorage.getItem("github");

        // Update DOM if data exists
        // Updates both the congrats header and the name printed on the ticket.
        if (savedName) {
            document.getElementById("display-name").textContent = savedName + "!";
            document.getElementById("display-ticket-name").textContent = savedName;
        }
        // Shows the email in the confirmation paragraph.
        if (savedEmail) {
            document.getElementById("display-email").textContent = savedEmail;
        }

        if (savedGithub) {
            // Removing the '@' symbol if user typed it, so we don't get '@@username'
            const cleanGithub = savedGithub.replace('@', '');
            document.getElementById("display-github").textContent = cleanGithub;
        }

        // Generate a random ticket number
        // Creates a 5-digit number between 10000 and 99999 for the ticket ID.
        // Math.random() returns a decimal (0–1), we scale it to the 5-digit range.
        const randomNum = Math.floor((Math.random() * 90000) + 10000);
        document.getElementById("ticket-number").textContent = "#" + randomNum;
    