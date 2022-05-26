let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

function load() {

    username.value=localStorage.getItem('username');
    email.value=localStorage.getItem('email');
    phone.value=localStorage.getItem('phone');

    document.getElementById('name_user').innerHTML=localStorage.getItem('username');


}

function changeProfile(){

    if (_.isEmpty(username.value)) {
        // document.getElementById('alert').innerHTML = "Please enter username!";
        alert('Please enter username!');
        return false;
    }

    if (_.isEmpty(email.value)) {
        // document.getElementById('alert').innerHTML = "Please enter email!";
        alert('Please enter email!');
        return false;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        // document.getElementById('alert').innerHTML = "**You have entered a valid email address";
        alert('**You have entered a valid email address');
        return false;
    }

    if (_.isEmpty(phone.value)) {
        // document.getElementById('alert').innerHTML = "Please enter email!";
        alert('Please enter phone!');
        return false;
    }

    if (!(phone.value.match(/^\d{10}$/))) {
        // document.getElementById('alert').innerHTML = "**You have entered a valid email address";
        alert('**Phone length must be 10 numbers');
        return false;
    }

    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('phone', phone.value);

    alert('Successfully updated!');
    location.reload();
}