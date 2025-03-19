 //step 4

function reportResults (response) {

    if (response != 'error') {
            const myData = JSON.parse(response); // changes text to arrays and object
            console.log(myData);
            document.getElementById('weather').innerHTML = "Precipitation: " + myData.current.precipitation  + "\" <br> Temperature: " + myData.current.temperature_2m + "°F";
            if (myData.current.cloud_cover <= 25) {
            document.getElementById('cloudcover').innerHTML = "☀️";
            } else if (myData.current.cloud_cover <= 75) {
            document.getElementById('cloudcover').innerHTML = "⛅";
            } else if (myData.current.cloud_cover <= 100) {
            document.getElementById('cloudcover').innerHTML = "☁️";
            }
        }

}

endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=temperature_2m,precipitation,cloud_cover&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch';

//step 1
const request = new XMLHttpRequest(); 

//step 2
request.addEventListener('readystatechange', () => { 
if (request.readyState === 4 && request.status === 200) { 
    reportResults(request.responseText);
} else if (request.readyState === 4) { 
    reportResults('error');
}
});

//step 3

request.open('GET', endpoint); 
request.send();