import React from 'react';

// form change function
function select_change() {
    var z = document.getElementById("form_action").selectedIndex;
    var z1 = document.getElementsByTagName("option")[z].value;
    alert("Form action changed to " + z1);
}
//login validation
function validation() {
    var u=document.forms["myform"]["user"].value;
    var p=document.forms["myform"]["pwd"].value;
    if (u==''||p==''){
        alter('plaser fill all fields')
        return false;
    }
    else if(u == p) {
        alert("Welcome！");
        window.location="sec.html";
        return false;
    }
    else
    {
        alert("Please Try again!");
        return false;
    }
}
