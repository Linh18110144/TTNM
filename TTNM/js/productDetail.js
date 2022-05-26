function addToCart(){
    alert("The product has been added to cart. ");
}

function chooseImg1(){
    // let value = document.getElementById('img1').src.value;
    document.getElementById('bigImg').src='/images/product-1.png';
}

function chooseImg2(){
    // let value = document.getElementById('img1').src.value;
    document.getElementById('bigImg').src='/images/product-2.png';
}

function load(){
    document.getElementById('name_user').innerHTML=localStorage.getItem('username');
}