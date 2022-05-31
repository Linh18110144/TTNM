function load() {
    document.getElementById('name_user').innerHTML = localStorage.getItem('username');
}

let d = 3;

function deleteItem1() {
    let total = document.getElementById('total');
    if (d == 1) {
        document.getElementById('cart').style.display = 'none';
        document.getElementById('none_cart').style.display = 'block';
        return;
    }
    document.getElementById('item1').style.display = 'none';
    document.getElementById('summary-item1').style.display = 'none';
    if (d == 3)
        total.innerHTML = '$90.99';
    else if (d == 2 && total.innerHTML == '$90.99')
        total.innerHTML = '$75.00';
    else
        total.innerHTML = '$15.99';
    console.log(total);

    d--;

}

function deleteItem2() {
    let total = document.getElementById('total');
    if (d == 1) {
        document.getElementById('cart').style.display = 'none';
        document.getElementById('none_cart').style.display = 'block';
        return;
    }
    document.getElementById('item2').style.display = 'none';
    document.getElementById('summary-item2').style.display = 'none';
    if (d == 3)
        total.innerHTML = '$90.99';
    else if (d == 2 && total.innerHTML == '$90.99')
        total.innerHTML = '$75.00';
    else
        total.innerHTML = '$15.99';
    d--;
}

function deleteItem3() {
    let total = document.getElementById('total');
    if (d == 1) {
        document.getElementById('cart').style.display = 'none';
        document.getElementById('none_cart').style.display = 'block';
        return;
    }
    document.getElementById('item3').style.display = 'none';
    document.getElementById('summary-item3').style.display = 'none';
    if (d == 3)
        total.innerHTML = '$31.98';
    else
        total.innerHTML = '$15.99';
    d--;
}