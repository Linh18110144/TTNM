function loginSubmit() {
    document.getElementById('alert').style = "";
    let email = document.getElementsByName("email");
    let password = document.getElementsByName("password");

    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

    // var pass = document.getElementsByName("password");

    // if(!user[0].value)
    // {
    //     return;
    // }

    // if(!pass[0].value)
    // {
    //     return;
    // }

    // document.getElementById("frmLogin").onsubmit();

    if (_.isEmpty(email[0].value)) {
        document.getElementById('alert').innerHTML = "Please enter email!";
        return false;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email[0].value))) {
        document.getElementById('alert').innerHTML = "**You have entered a valid email address";
        return false;
    }

    if (_.isEmpty(password[0].value)) {
        document.getElementById('alert').innerHTML = "Please enter password!";
        return false;
    }

    if (validatePassword(password) == false)
        return false;

    // if(!(password[0].value.match(paswd))){
    //     document.getElementById('alert').innerHTML = "**Password must be have a number";
    //     return false;
    // }

    if (email[0].value != localStorage.getItem('email') || password[0].value != localStorage.getItem('password')) {
        document.getElementById('alert').innerHTML = "Email or password not true!";
        return false;
    }

    alert('Login success!');
    
    // localStorage.setItem('username', "");
    // localStorage.setItem('email', email[0].value);
    // localStorage.setItem('password', password[0].value);
    // localStorage.setItem('phone', "");

    window.location.href="home.html";
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