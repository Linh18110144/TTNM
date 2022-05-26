function goStep2() {
    document.getElementById('step_2').style.display="block";
    document.getElementById('step_3').style.display="none";
    document.getElementById('step_1').style.display="none";

    document.getElementsByClassName('line')[0].style.border="1px solid yellow";
    document.getElementsByClassName('circle')[1].style.border="2px solid yellow";
    document.getElementsByClassName('circle')[1].style.color="yellow";
    document.getElementsByClassName('part_text')[1].style.color="yellow";
}

function goStep1() {
    document.getElementById('step_2').style.display="none";
    document.getElementById('step_1').style.display="block";
    document.getElementById('step_3').style.display="none";
}

function goStep3() {
    document.getElementById('step_2').style.display="none";
    document.getElementById('step_3').style.display="block";
    document.getElementById('step_1').style.display="none";

    document.getElementsByClassName('line')[1].style.border="1px solid yellow";
    document.getElementsByClassName('circle')[2].style.border="2px solid yellow";
    document.getElementsByClassName('circle')[2].style.color="yellow";
    document.getElementsByClassName('part_text')[2].style.color="yellow";
}

function backStep2(){
    document.getElementById('step_2').style.display="block";
    document.getElementById('step_3').style.display="none";
    document.getElementById('step_1').style.display="none";

    document.getElementsByClassName('line')[1].style.border="1px solid white";
    document.getElementsByClassName('circle')[2].style.border="2px solid white";
    document.getElementsByClassName('circle')[2].style.color="white";
    document.getElementsByClassName('part_text')[2].style.color="white";
}

function backStep1(){
    document.getElementById('step_2').style.display="none";
    document.getElementById('step_1').style.display="block";
    document.getElementById('step_3').style.display="none";

    document.getElementsByClassName('line')[0].style.border="1px solid white";
    document.getElementsByClassName('circle')[1].style.border="2px solid white";
    document.getElementsByClassName('circle')[1].style.color="white";
    document.getElementsByClassName('part_text')[1].style.color="white";
}