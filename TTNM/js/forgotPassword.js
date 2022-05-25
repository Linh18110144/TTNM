function forgotPassSubmit() {
    let email = document.getElementsByName("email");


    if (_.isEmpty(email[0].value)) {
        document.getElementById('alert').innerHTML = "Please enter email!";
        return false;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email[0].value))) {
        document.getElementById('alert').innerHTML = "You have entered a valid email address!";
        return false;
    }

    alert('Check mail to recive OTP code!');
    window.location.href="OTP.html";
}

function OTPSubmit() {
    let OTP = document.getElementsByName("OTP");


    if (_.isEmpty(OTP[0].value)) {
        document.getElementById('alert').innerHTML = "Check mail to receive and enter OTP code!";
        return false;
    }

    if (OTP[0].value != '1234') {
        document.getElementById('alert').innerHTML = "OTP code not true. Try again!";
        return false;
    }

    alert('Enter OTP code success!');
    window.location.href="resetPassword.html";
}

function resetPassSubmit() {

    let password = document.getElementsByName("newPassword");
    let confirmPassword = document.getElementsByName("confirmNewPassword");

    if (_.isEmpty(password[0].value)) {
        document.getElementById('alert').innerHTML = "Please enter password!";
        return false;
    }

    if (validatePassword(password) == false)
        return false;

    if (_.isEmpty(confirmPassword[0].value)) {
        document.getElementById('alert').innerHTML = "Please enter confirm password!";
        return false;
    }

    if (confirmPassword[0].value != password[0].value) {
        document.getElementById('alert').innerHTML = "Confirm password not true!";
        return false;
    }

    alert('Reset password success!');
    window.location.href="login.html";
}

function validatePassword(password) {
    //minimum password length validation  
    if (password[0].value.length < 8) {
        document.getElementById('alert').innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    //Maximun password length validation  
    if (password[0].value.length > 15) {
        document.getElementById('alert').innerHTML = "**Password length must be not exceed 15 characters";
        return false;
    }

    if (!(password[0].value.match(/[a-z]/g))) {
        document.getElementById('alert').innerHTML = "**Password must be have a lowercase letter";
        return false;
    }

    if (!(password[0].value.match(/[A-Z]/g))) {
        document.getElementById('alert').innerHTML = "**Password must be have a uppercase letter";
        return false;
    }

    if (!(password[0].value.match(/[0-9]/g))) {
        document.getElementById('alert').innerHTML = "**Password must be have a number";
        return false;
    }

    if (!(password[0].value.match(/(?=.*?[#?!@$%^&*-])/))) {
        document.getElementById('alert').innerHTML = "**Password must be have a special character";
        return false;
    }
}