function toggleVisibilityCheck(id) {
    if(document.getElementById('getUp').checked == true && document.getElementById('getDressed').checked == true && document.getElementById('brushTeeth').checked == true && document.getElementById('eatBreak').checked == true){ //crikey, isnt she a beauty?!
        var e = document.getElementById(id);
        e.style.display = 'block';
    }
}

function toggleVisibilityOff(id) {
    var k = document.getElementById(id);
    k.style.display = 'none';
}

function toggleVisibility(id) {
    var e = document.getElementById(id);
    e.style.display = 'block';
}

function zombie(){
    var element = document.getElementById('all');
    element.style.backgroundColor = "black";
}