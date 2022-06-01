let step_1 = document.getElementById('step_1');
let step_2 = document.getElementById('step_2');
let step_3 = document.getElementById('step_3');

let username = document.getElementById('name');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let email = document.getElementById('email');

function goStep2() {

    if (_.isEmpty(username.value)) {
        alert('Please enter your name!');
        return;
    }

    if (_.isEmpty(phone.value)) {
        alert('Please enter phone!');
        return;
    }

    if (!(phone.value.match(/^\d{10}$/))) {
        alert('**Phone length must be 10 numbers');
        return;
    }

    if (_.isEmpty(address.value)) {
        alert('Please enter address!');
        return;
    }

    document.getElementById('inf_name').innerHTML = username.value;
    document.getElementById('inf_phone').innerHTML = phone.value;
    document.getElementById('inf_address').innerHTML = address.value;

    step_2.style.display = "block";
    step_3.style.display = "none";
    step_1.style.display = "none";

    change_color_yellow(0, 1);
}

function goStep1() {
    step_2.style.display = "none";
    step_1.style.display = "block";
    step_3.style.display = "none";
}

function goStep3() {
    step_2.style.display = "none";
    step_3.style.display = "block";
    step_1.style.display = "none";

    change_color_yellow(1, 2);
}

function backStep2() {
    step_2.style.display = "block";
    step_3.style.display = "none";
    step_1.style.display = "none";

    change_color_white(1, 2);
}

function backStep1() {
    step_2.style.display = "none";
    step_1.style.display = "block";
    step_3.style.display = "none";

    change_color_white(0, 1);
}

function load() {
    console.log(localStorage.getItem('email'));
    username.value = localStorage.getItem('username');
    phone.value = localStorage.getItem('phone');
    email.value = localStorage.getItem('email');
}

function change_color_white(a, b) {
    document.getElementsByClassName('line')[a].style.border = "1px solid white";
    document.getElementsByClassName('circle')[b].style.border = "2px solid white";
    document.getElementsByClassName('circle')[b].style.color = "white";
    document.getElementsByClassName('part_text')[b].style.color = "white";
}

function change_color_yellow(a, b) {
    document.getElementsByClassName('line')[a].style.border = "1px solid yellow";
    document.getElementsByClassName('circle')[b].style.border = "2px solid yellow";
    document.getElementsByClassName('circle')[b].style.color = "yellow";
    document.getElementsByClassName('part_text')[b].style.color = "yellow";
}