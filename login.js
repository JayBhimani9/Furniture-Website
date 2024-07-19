document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login
    alert('Login form submitted');
    window.location.href = "index.html"; // Redirect to index.html
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form values
    const firstName = document.getElementById('register-first-name').value.trim();
    const lastName = document.getElementById('register-last-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('register-confirm-password').value.trim();

    // Validate first name and last name
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName)) {
        alert('First name should contain only alphabets.');
        return;
    }
    if (!nameRegex.test(lastName)) {
        alert('Last name should contain only alphabets.');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be 8-30 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // If all validations pass
    alert('Registration form submitted');
    window.location.href = "index.html"; // Redirect to index.html
});
