const todayWeather=(city)=>{
    return async dispatch=>{
        try {
            let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34b0a301451c594a961ae59f8f575e91&units=metric&lang=ru`)
            let json=await response.json()
            console.log(json)
            let body={
                name: json.name,
                temp: `${Math.floor(json.main.temp)}°`,
                wind: `${json.wind.speed} м/с, ${json.wind.deg}градус.`,
                main: json.weather[0].description,
                humidity: `${json.main.humidity}%`,
                pressure: `${Math.floor(json.main.pressure/1.3322)} мм рт.ст.`,
                probabilityRain: '0%'
            }
            dispatch({type: 'NOW_WEATHER',nowInformation:body})
        } catch (e){
            let body={
                name: `нет информации`,
                temp: `нет информации`,
                wind: `нет информации`,
                main: `нет информации`,
                humidity: `нет информации`,
                pressure: `нет информации`,
                probabilityRain: 'нет информации'
            }
            console.log(e)
            dispatch({type: 'NOW_WEATHER',nowInformation:body})
        }

    }
}
export default todayWeather
