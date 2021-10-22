const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
currentWeatherItemsE1 = document.getElementById
('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById(current-temp);


const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const API_KEY = '5b741f58d3f7ceb42c7e0aa84d731886';
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrformat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeE1.innerHTML = (hoursIn12Hrformat < 10? '0' +hoursIn12Hrformat :hoursIn12Hrformat)+ ':' +(minutes < 10? '0' +minutes: minutes)+ ' ' + '<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML = days[day]+',' +date+' '+months[month]
}, 1000);

function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success)=>{

        let {latitude, longitude} = success.coords;
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourlt,minutely&appid=${API_key}').then(res=>res.json()).then(dara=> {
            console.log(data)
            showWeatherData(data);
    })   

        
    )}
    
}

function showWeatherData(data){
    let {humidity, pressure, surprise, sunset, wind_speed} = data.current;

    timezone.innerHTML = data.timezone;
    countryE1.innerHTML = data.lat + 'N' + data.lon+'E'

    currentWeatherItemsE1.innerHTML = 
    <div class="weather-item">
       <div>Humidity</div>
       <div>${Humidity}</div>
    </div>
<div class="weather-item">
    <div>Pressure</div>
    <div>${pressure}</div>
</div>
<div class="weather-item">
    <div>Wind Speed</div>
    <div>${wind_speed}</div>
</div>
<div class="weather-item">
    <div>Sunrise</div>
    <div>${window.Comment(sunrise *1000).format('HH:mm a')}</div>
</div>
<div class="weather-item"> 
    <div>Sunset</div>
    <div>${window.Comment(sunset *1000).format('HH:mm a')}</div>
</div>


;

let otherDayforecast =''
data.daily.foreach((day,idx)=>{
    if(idx ==0){
        currentTempE1.innerHTML =

        <div class="future-forecast">
        <div class="today" id="current-temp">
            <img src="https://i2.wp.com/www.titanui.com/wp-content/uploads/2013/08/19/${day.weather[0].icon}High-Quality-Climate-Weather-Icons-PSD.jpg" width="100px" height="100px" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.Comment(sunset day.dt *1000).format('ddd')}</div>
                <div class="temp">Night -${day.temp.night} &#176; c</div>
                <div class="temp">Day -${day.temp.day} &#176; c</div> 

            </div>

    }else{
        otherDayForecast +=
        <div class="weather-forecast-item">
        <div class="day">${window.Comment(sunset day.dt *1000).format('ddd')}</div>
        <img src="https://i2.wp.com/www.titanui.com/wp-content/uploads/2013/08/19/${day.weather[0].icon}High-Quality-Climate-Weather-Icons-PSD.jpg" width="100px" height="100px" alt="weather icon" class="weather-icon">
        <div class="temp">Night -${day.temp.night} &#176; c</div>
        <div class="temp">Day -${day.temp.day} &#176; c</div>

    </div>
    }
    
})

  weatherForecastE1.innerHTML = otherDayForecast;

}