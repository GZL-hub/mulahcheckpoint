function checkLoyaltyPoints() {
    const areaCode = document.getElementById('area-code').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const fullNumber = areaCode + mobileNumber;

    localStorage.setItem('phoneNumber', fullNumber);

    if (fullNumber === '+60173527250') {
        window.location.href = 'page3.html'; // Redirect to Page 3 for the specific number
    } else {
        window.location.href = 'page2.html'; // Redirect to Page 2 for any other input
    }
}

function toggleEmailInput() {
    const emailInput = document.getElementById('email');
    const noEmailCheckbox = document.getElementById('no-email');

    if (noEmailCheckbox.checked) {
        emailInput.value = '';
        emailInput.disabled = true;
    } else {
        emailInput.disabled = false;
    }
}

function submitForm() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const email = document.getElementById('email').value;
    const noEmail = document.getElementById('no-email').checked;

    const nameError = document.getElementById('name-error');
    const birthdayError = document.getElementById('birthday-error');
    const emailError = document.getElementById('email-error');

    let isValid = true;

    if (!name) {
        nameError.textContent = 'Enter name';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (!birthday) {
        birthdayError.textContent = 'Enter date';
        isValid = false;
    } else {
        birthdayError.textContent = '';
    }

    if (!email && !noEmail) {
        emailError.textContent = 'Enter valid email (use "@")';
        isValid = false;
    } else if (email && !email.includes('@')) {
        emailError.textContent = 'Enter valid email';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!isValid) {
        return;
    }

    const formData = {
        name: name,
        birthday: birthday,
        email: noEmail ? 'No email address' : email
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'page3.html';
}

function goBack() {
    window.location.href = 'index.html'; // Redirect to the first page
}