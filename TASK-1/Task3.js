function temperature() 
{
    let temperature_input = document.querySelector("#temperature_input").value;
    let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");
    let result = document.querySelector("#result");
    if (input1.value == "celcius" && input2.value == "kelvin") 
    {
        let Kelvin = Number.parseInt(temperature_input) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + " °K"
    }
     else if (input1.value == "celcius" && input2.value == "fahrenheit") 
     {
        let Fahrenheit = Number.parseInt(temperature_input)*(9/5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + " °F"
    }
    else if (input1.value == "fahrenheit" && input2.value == "celcius") 
     {
        let Celcius = (Number.parseInt(temperature_input)-32) * 5/9
        result.innerHTML = Celcius.toFixed(2) + " °C"
    }
    else if (input1.value == "fahrenheit" && input2.value == "kelvin") 
     {
        let Kelvin = ((Number.parseInt(temperature_input)-32) * 5/9)+273.15
        result.innerHTML = Kelvin.toFixed(2) + " °K"
    }
    else if (input1.value == "kelvin" && input2.value == "celcius") 
     {
        let Celcius = Number.parseInt(temperature_input) -273.15
        result.innerHTML = Celcius.toFixed(2) + " °C"
    }
    else if (input1.value == "kelvin" && input2.value == "fahrenheit") 
     {
        let Fahrenheit = ((Number.parseInt(temperature_input) - 273.15)*9/5)+32
        result.innerHTML = Fahrenheit.toFixed(2) + " °F"
    }
    
}