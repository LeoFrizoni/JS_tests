//Non-functional script, just studying classes and functions in JS

var grmcoffee = window.querySelector("input#grmcoffee");
var mlwater = window.querySelector("input#lmwater");
var output = window.querySelector("#output")

function boilwater(currentTemp){
    while(currentTemp < 92 || currentTemp >96 ){
        if (currentTemp < 92){
            output.textContent += "Boiling water..."
            currentTemp += 1 //Simulate boiling
        }
        else if (currentTemp > 96 ){
            output.textContent = "Cooling water..."
            currentTemp -= 1 //Simulate cooling
        }
        sleep(100); //Simulate pause for boiling or cooling
    }
    output.textContent += `The actual Water temperature is ${currentTemp}°C`
    return currentTemp;
}

async function docoffee(){ //async function for waiting boilwater()
    var coffee = parseFloat(grmcoffee.value);
    var water = parseFloat(mlwater.value);
    if (isNaN(coffee) || isNaN(water) || coffee <= 0 ||  water <= 0)
        output.textContent = "Please, insert valid numbers for Coffee amount and Water amount";
        
    else{
        output.textContent = "Measuring Coffee amount..."
        output.textContent = "Measuring Water amount..."
        var initialTemp = 32
        var finalTemp = await boilwater(initialTemp)
        output.textContent = "Boiling water..."
        output.textContent = "Pouring hot water into the filter with coffee..."
        output.textContent = "Starting to prepair your coffee..."
    
    }    
}

   


