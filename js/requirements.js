function toggleVisibilityCheck(id) {
    if(document.getElementById('getUp').checked == true && document.getElementById('getDressed').checked == true && document.getElementById('brushTeeth').checked == true && document.getElementById('eatBreak').checked == true){ //crikey, isnt she a beauty?!
        var e = document.getElementById(id);
        e.style.display = 'block';
    }
}

function toggleVisibility(id) {
    var e = document.getElementById(id);
    e.style.display = 'block';
}

function toggleVisibilityCheck2(name) {
    var e = document.getElementsByName(name);
    e.style.display = 'block';
}