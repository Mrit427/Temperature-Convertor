function convert(){
    let input = parseFloat( document.getElementById("numberbox").value );
    let temperature1 = document.getElementById("temperature1").value;
    let temperature2 = document.getElementById("temperature2").value;
     let result;
    if (temperature1 === "Celsius" && temperature2 === "Celsius"){
        result = input ;
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "°C";
        document.getElementById("calculation").textContent 
        = input.toFixed( 2 ) + " °C" + " × 1" + " = " + result.toFixed( 2 ) + " °C"; 
    }
    else if (temperature1 === "Celsius" && temperature2 === "Fahrenheit"){
        result = (input * 9) / 5 + 32;
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "°F";
        document.getElementById("calculation").textContent
        = input.toFixed( 2 ) + " °C × (9 / 5) + 32 " + " = " + result.toFixed( 2 ) + " °F"; 
    }
    else if (temperature1 === "Celsius" && temperature2 === "Kelvin") { 
        result = input + 273.15 ; 
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "K";
        document.getElementById("calculation").textContent
        = input.toFixed( 2 ) + " °C + 273.15 " + " = " + result.toFixed( 2 ) + " K"; 
    }
    else if (temperature1 === "Fahrenheit" && temperature2 === "Celsius") { 
        result = ((input - 32 ) * (5/9)); 
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "°C";
        document.getElementById("calculation").textContent
        = input.toFixed( 2 ) + " °F - 32 ×  ( 5 / 9 ) " + " = " + result.toFixed( 2 ) + " °C"; 
    }
    else if (temperature1 === "Fahrenheit" && temperature2 === "Fahrenheit") { 
        result = (input * 1); 
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "°F";
        document.getElementById("calculation").textContent
        = input.toFixed( 2 ) + " °F × 1 " + " = " + result.toFixed( 2 ) + " °F"; 
    }
    else if (temperature1 === "Fahrenheit" && temperature2 === "Kelvin") { 
        result = (((input - 32 ) * (5/9)) + 273.15); 
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "K";
        document.getElementById("calculation").textContent
        = " ( ( " + input.toFixed( 2 ) + " °F - 32 ) × ( 5 / 9 ) ) + 273.15 " + " = " + result.toFixed( 2 ) + " K";
    }
    else if (temperature1 === "Kelvin" && temperature2 === "Celsius") { 
        result = input - 273.15; 
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "°C";
        document.getElementById("calculation").textContent
        = input.toFixed( 2 ) + " K - 273.15 " + " = " + result.toFixed( 2 ) + " °C";
    }
    else if (temperature1 === "Kelvin" && temperature2 === "Fahrenheit") { 
        result = ((input - 273.15) * (9/5 ) + 32 ) ;  
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "°F";
        document.getElementById("calculation").textContent
        = " ( ( " +  input.toFixed( 2 ) + " K - 273.15) × ( 9 / 5 ) + 32  " + " = " + result.toFixed( 2 ) + "°F";
    }
    else if (temperature1 === "Kelvin" && temperature2 === "Kelvin") { 
        result = input ; 
        document.getElementById("result").textContent 
        = result.toFixed( 2 ) + "K";
        document.getElementById("calculation").textContent
        = input.toFixed( 2 ) + " K × 1 " + " = " + result.toFixed( 2 ) + " K"; 
    }
    else { 
		result = "Input Correctly";
        document.getElementById("result").textContent 
        = result;
    } 
   
 }