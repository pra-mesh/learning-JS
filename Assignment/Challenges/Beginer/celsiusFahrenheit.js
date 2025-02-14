/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/
function FahrenheitToCelsius(temp){
    return (temp -32)*5/9;
}
function CelsiusToFahreheit(temp){
    return (9*temp/5)+32;
}
function tempConverter(temp, convertfrom){

    if(String(convertfrom).toLowerCase() ==="Celsius" || String(convertfrom).toLowerCase() === "c"){
        console.log(`${temp}°C is ${CelsiusToFahreheit(temp)}°F`);
    }
    else{
        console.log(`${temp}°F is ${FahrenheitToCelsius(temp)}°C`);
    }
    return;
}
tempConverter(45,"F");