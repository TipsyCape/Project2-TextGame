function check(){
    let x =0;
    if (document.getElementById('getUp').checked) {
        console.log("getup checked");
        x++;
    }
    if (document.getElementById('getDressed').checked) {
        console.log("getdressed checked");
        x++;
    }
    if (document.getElementById('brushTeeth').checked) {
        console.log("brush checked");
        x++;
    }
    if (document.getElementById('eatBreak').checked) {
        console.log("checked");
        x++;
    }

    if(x == 4){
        toggleVisibility();
    }
    
}


function toggleVisibility(){
    var e = document.getElementById('t2');
    e.style.visibility.toggle(); 
}