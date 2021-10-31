const input = document.querySelector('input')
const body = document.querySelector('body')


input.addEventListener('keyup', (e)=>{
            if (e.key == 'Enter') {
                getWeather(input.value)
                body.removeChild(body.childNodes[0])
            }
        })

async function getWeather(place) {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=612063be1ae68a9db6d031baba132bda`;
    const res = await fetch(url);
    const data = await res.json(); 
    render(data)
}

function toNormalTime(time) {
    let date = new Date(time*1000)
    return(date.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'}));
}

function toNormalDate(time) {
    let date = new Date(time*1000)
    return(date.toLocaleDateString('en-GB', {weekday:'long', day:'2-digit', month:'long', year:'numeric'}) );
}

function pictureSelector(id) {
    console.log(id);

    switch (id) {
        case 800:
            return('sunnn')
        case 801: case 802:
            return('cloud')  
        case 803: case 804:
            return('clouds') 
        default:
            switch (Math.trunc(id/100)) {
                case 2:
                    return('storm')
                case 3: case 5:
                    return('rain')
                case 7:
                    return('dust')
                case 6:
                    return('snow')
            }
    }
    }




function render(data) {
    body.innerHTML=`
    
    <div class="weather">

    <div class="aboba">
            <div class="location">
                <div class="selectedLocation" style="padding-left:10px" >${data.name}</div>
                <div class="Abobik">Current Location</div>
            </div>
            <div class="settings">
    
            </div>
        </div>
      

        <div class="weather_inner">
            <div class="current">  
            <div class="current_date">${toNormalDate(data.dt)}</div>
            <div class="current_temperature">${(data.main.temp - 273.15).toFixed(1)}°C</div>
            <div class="current_description">${(data.main.temp_min - 273.15).toFixed(0)}°C          ${(data.main.temp_max - 273.15).toFixed(0)}°C</div>
        </div>
        
        <div class="forecast">
            <img src="./pic/${pictureSelector(data.weather[0].id)}.png" height="120" width="120" />
            <div class="forecast_description">${data.weather[0].description}</div>
        </div>

        <div class="details">

                    <div class="details_item">
                        <img src="./pic/sunrise.png" alt="sunrise"  />
                        <div class="details_value">${toNormalTime(data.sys.sunrise)}</div>
                    </div>

                    <div class="details_item">
                        <img src="./pic/sunset.png" alt="sunset" />
                        <div class="details_value">${toNormalTime(data.sys.sunset)}</div>
                    </div>

            </div>
        </div>
    </div>

    `
}


