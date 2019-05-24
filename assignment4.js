var borderValidStyle = "2px solid green";
var borderInvalidStyle = "2px solid red";

function validateForm() {

    if (!confirmValidFields()) {
        alert("Please, fix the error(s) in the red box(es).")
    } else {
        alert("Form submitted with success!")
        window.location.reload();
    }
}

function clearForm() {
    document.getElementById("Form").reset();
}

function confirmValidFields() {
    var invalidMessage = "";

    var firstname = document.getElementById("firstNameInput");
    if (firstname.value === "") {
        firstname.setCustomValidity("First Name cannot be blank.")
        invalidMessage += "First Name cannot be blank.\n";
        firstname.style.border = borderInvalidStyle;
    } else {
        firstname.style.border = borderValidStyle;
    }

    var lastname = document.getElementById("lastNameInput");
    if (lastname.value === "") {
        lastname.setCustomValidity("Last Name cannot be blank.")
        invalidMessage += "Last Name cannot be blank.\n";
        lastname.style.border = borderInvalidStyle;
    } else {
        lastname.style.border = borderValidStyle;
    }

    var address = document.getElementById("addressInput");
    if (address.value === "") {
        address.setCustomValidity("Address cannot be blank.")
        invalidMessage += "Address cannot be blank.\n";
        address.style.border = borderInvalidStyle;
    } else {
        address.style.border = borderValidStyle;
    }

    var city = document.getElementById("cityInput");
    if (city.value === "") {
        city.setCustomValidity("City cannot be blank.")
        invalidMessage += "City cannot be blank.\n";
        city.style.border = borderInvalidStyle;
    } else {
        city.style.border = borderValidStyle;
    }

    var postalCode = document.getElementById("postalCodeInput");
    var postalcodeRegEx = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ]?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    if (postalCode.value === "") {
        postalCode.setCustomValidity("Postal Code cannot be blank.");
        invalidMessage += "Postal Code cannot be blank.\n";
        postalCode.style.border = borderInvalidStyle;
    } else if (!postalcodeRegEx.test(postalCode.value)) {
        postalCode.setCustomValidity("Should be in format A0A0A0.");
        invalidMessage += "Postal Code invalid. You should follow the pattern A0A0A0.\n";
        postalCode.style.border = borderInvalidStyle;
    } else {
        postalCode.style.border = borderValidStyle;
    }

    var age = document.getElementById("age");
    if (age.value === "") {
        age.setCustomValidity("Age cannot be blank.");
        invalidMessage += "Age cannot be blank.\n";
        age.style.border = borderInvalidStyle;
    } else if (age.value < 18) {
        age.setCustomValidity("Age cannot br less than 18.");
        invalidMessage += "Age cannot be less than 18.\n";
        age.style.border = borderInvalidStyle;
    } else {
        age.style.border = borderValidStyle;
    }

    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.value == "") {
        passwordInput.setCustomValidity("Password cannot be blank.");
        invalidMessage += "Password cannot be blank.\n";
        passwordInput.style.border = borderInvalidStyle;
    }

    var passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegEx.test(passwordInput.value)) {
        passwordInput.setCustomValidity("Passwords must contain at least 6 characters, 1 capital letter, and 1 number.");
        invalidMessage += "Passwords must contain at least 6 characters, 1 capital letter, and 1 number.\n";
        passwordInput.style.border = borderInvalidStyle;
    }

    var confirmPasswordInput = document.getElementById("confirmPasswordInput");
    if (confirmPasswordInput.value == "") {
        confirmPasswordInput.setCustomValidity("Confirm Password cannot be blank.");
        invalidMessage += "Confirm Password cannot be blank.\n";
        confirmPasswordInput.style.border = borderInvalidStyle;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.setCustomValidity("Password and Confirm Password do not match.");
        confirmPasswordInput.setCustomValidity("Password and Confirm Password do not match.");
        invalidMessage += "Password and Confirm Password do not match.\n";
        passwordInput.style.border = borderInvalidStyle;
        confirmPasswordInput.style.border = borderInvalidStyle;
    } else if (passwordInput.value !== "" && confirmPasswordInput.value !== "") {
        passwordInput.style.border = borderValidStyle;
        confirmPasswordInput.style.border = borderValidStyle;
    }

    var emailRegEx = /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/;
    var email = document.getElementById("emailInput");
    if (!emailRegEx.test(email.value)) {
        email.setCustomValidity("Must be a valid email.");
        invalidMessage += "Must be a valid email.\n";
        email.style.border = borderInvalidStyle;
    } else {
        email.style.border = borderValidStyle;
    }

    if (invalidMessage != "") {
        alert(invalidMessage);
        return false;
    } else { return true; }
}