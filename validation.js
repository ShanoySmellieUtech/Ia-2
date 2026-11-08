
// REGISTRATION FORM VALIDATION
// Handles form submission, validates inputs, saves to localStorage,
// and redirects to the ticket page.


document.getElementById("registerForm").addEventListener("submit", function (event) {
    // Prevents the form from refreshing the page on submit
    event.preventDefault();

    //  Geting values 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const github = document.getElementById("username").value;
    const avatar = document.getElementById("avatar").files[0];

    //  Geting error message elements
    const nameError = document.getElementById("name-message");
    const emailError = document.getElementById("email-message");
    const githubError = document.getElementById("username-message");
    const avatarError = document.getElementById("avatar-message");

    // Clearing previous errors 
    // Otherwise, old errors would stay on screen after the user fixes them.
    nameError.style.display = "none";
    emailError.style.display = "none";
    githubError.style.display = "none";
    avatarError.style.display = "none";

    let isValid = true; //  Tracking if form is valid

    // Validation for name 
    // .trim() removes trailing spaces 
    // The name must not be empty or contain only spaces.
    if (name.trim() === "") {
        nameError.textContent = "Please enter your full name.";
        nameError.style.display = "block"; 
        isValid = false;
    }

    // Validation for email
    //expression to ensure the format matches "user@domain.com".
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    }

    // Validation for GitHub username
    //Must start with '@'
    const githubPattern = /^@[a-zA-Z0-9-]+$/;
    if (!githubPattern.test(github)) {
        githubError.textContent = "GitHub Username must begin with @.";
        githubError.style.display = "block";
        isValid = false;
    }

    // Validation for avatar upload
    if (!avatar) {
        // // No file selected at all
        avatarError.textContent = "Please upload an avatar.";
        avatarError.style.display = "block";
        isValid = false;
    } else {
        // File exist, Checking file type and size
        if (!["image/jpeg", "image/png"].includes(avatar.type)) {
            avatarError.textContent = "Only JPEG and PNG images are allowed.";
            avatarError.style.display = "block";
            isValid = false;
            // // 500 * 1024 converts 500KB into bytes
        } else if (avatar.size >= 500 * 1024) {
            avatarError.textContent = "Image must be smaller than 500KB.";
            avatarError.style.display = "block";
            isValid = false;
        }
    }

    // Submitting the form if everything is valid
    // Save the text data to localStorage so ticket.html can read it
    if (isValid) {
        localStorage.setItem("fullName", name.trim());
        localStorage.setItem("email", email);
        localStorage.setItem("github", github);

    
    //  Displaying success message and redirecting to ticket page
        alert("Registration successful! Form Submitted.");
        window.location.href = "ticket.html";
    }

   
});