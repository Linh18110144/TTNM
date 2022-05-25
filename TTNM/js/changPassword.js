let currentPassword = document.getElementById('currentPassword');
let newPassword = document.getElementById('newPassword');
let confirmNewPassword = document.getElementById('confirmNewPassword');

function changePassword(){

    if (_.isEmpty(currentPassword.value)) {
        // document.getElementById('alert').innerHTML = "Please enter username!";
        alert('Please enter current password!');
        return false;
    }

    if (_.isEmpty(newPassword.value)) {
        // document.getElementById('alert').innerHTML = "Please enter username!";
        alert('Please enter new password!');
        return false;
    }

    if (_.isEmpty(confirmNewPassword.value)) {
        // document.getElementById('alert').innerHTML = "Please enter username!";
        alert('Please enter confirm new password!');
        return false;
    }

    if(!validatePassword(newPassword)){
        return false;        
    }
     
    if(newPassword.value != confirmNewPassword.value){
        alert('New password and confirm new password do not match!!!');
        return false;
    }

    if(currentPassword.value != localStorage.getItem('password')){
        alert('Current password not true!');
        return false;
    }

    localStorage.setItem('password', newPassword.value);

    alert('Successfully changed password!');
    location.reload();
}

function validatePassword(password) {
    //minimum password length validation  
    if (password.value.length < 8) {
        // document.getElementById('alert').innerHTML = "**Password length must be atleast 8 characters";
        alert('**Password length must be atleast 8 characters');
        return false;
    }

    //Maximun password length validation  
    if (password.value.length > 15) {
        // document.getElementById('alert').innerHTML = "**Password length must be not exceed 15 characters";
        alert('**Password length must be not exceed 15 characters');
        return false;
    }

    if (!(password.value.match(/[a-z]/g))) {
        // document.getElementById('alert').innerHTML = "**Password must be have a lowercase letter";
        alert('**Password must be have a lowercase letter');
        return false;
    }

    if (!(password.value.match(/[A-Z]/g))) {
        // document.getElementById('alert').innerHTML = "**Password must be have a uppercase letter";
        alert("**Password must be have a uppercase letter");
        return false;
    }

    if (!(password.value.match(/[0-9]/g))) {
        // document.getElementById('alert').innerHTML = "**Password must be have a number";
        alert("**Password must be have a number");
        return false;
    }

    if (!(password.value.match(/(?=.*?[#?!@$%^&*-])/))) {
        // document.getElementById('alert').innerHTML = "**Password must be have a special character";
        alert("**Password must be have a special character");
        return false;
    }

    return true;
}