// removes the cookie box box when I accept is selected
function removeBTN () {
    document.getElementById("cookie-time").style.display = "none";
}

// converts the temperature to the appropriate scale
function scaleConversion(element) {
    x = String.fromCharCode(8451); // sets x to the Celsius symbol
    y = String.fromCharCode(8457); // sets y to the Fahrenheit symbol
    
    selectTemp = document.querySelectorAll("span.temp-value"); // select all the span elements with class "temp-value"
    newTemp = 0;
    
    // checks the element value passed from the select element and sees what the temperature scale is and then
    // converts the scale to the opposite value (C to F | F to C)
    if(x === element.value) {
        for (var i = 0; i < selectTemp.length; i++) {
            z = parseFloat(selectTemp[i].innerText);
            newTemp = (z - 32) * (5/9);
            newTemp = newTemp.toFixed(1);
            selectTemp[i].innerText = newTemp;
        }
    } if(y === element.value) {
        for (var i = 0; i < selectTemp.length; i++) {
            z = parseFloat(selectTemp[i].innerText);
            newTemp = (z * 1.8) + 32;
            newTemp = newTemp.toFixed(1);
            selectTemp[i].innerText = newTemp;
        }
    }
}