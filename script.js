function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.src = 'https://cdn-icons-png.flaticon.com/512/565/565655.png';
    } else {
        passwordField.type = 'password';
        toggleIcon.src = 'https://cdn-icons-png.flaticon.com/512/565/565654.png';
    }
}

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let isValid = true;

    document.querySelectorAll('.error').forEach(error => (error.textContent = ''));

    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    if (name === '') {
        document.getElementById('nameError').textContent = 'Error: Name is required.';
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = 'Error: Name should be 2-30 characters long and contain only letters or spaces.';
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Error: Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Error: Enter a valid email (e.g., name@example.com).';
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Error: Password is required.';
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Error: Password must include uppercase, lowercase, a number, and a special character.';
        isValid = false;
    }

    if (gender === '') {
        document.getElementById('genderError').textContent = 'Error: Gender is required.';
        isValid = false;
    }

    const today = new Date();
    const dobDate = new Date(dob);
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Error: Date of Birth is required.';
        isValid = false;
    } else if (dobDate >= today) {
        document.getElementById('dobError').textContent = 'Error: Date of Birth cannot be in the future.';
        isValid = false;
    }

    const phoneRegex = /^(\+91)?\d{10}$/;
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Error: Phone number is required.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Error: Enter a valid phone number starting with +91 and followed by 10 digits.';
        isValid = false;
    }

    if (isValid) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Congratulations! You are successfully registered!';
        document.body.appendChild(successMessage);

        this.reset();
        
        document.querySelector('.form-container').style.display = 'none';

        setTimeout(() => {
            successMessage.remove();
        }, 10000);
    }
});
