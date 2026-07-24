const convertBtn = document.getElementById("convertbtn");
const celsiusbtn = document.getElementById("celsius");
const kelvinbtn = document.getElementById("kelvin");
let result;
function convert(x) {
if (celsiusbtn.checked) {
    result = x - 273.15;   // this is K → C 
}
else if (kelvinbtn.checked) { 
    result = x + 273.15;   // this is C → K
}
else {
    window.alert("Please select a conversion type.");
}
}
let value;
convertBtn.onclick = function() {
    value = document.getElementById("inputValue").value;
    value = Number(value);
    convert(value);
    document.getElementById("outputValue").textContent = result;
}