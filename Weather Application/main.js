window.addEventListener('load',()=>{
  let long
  let lat
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureDegree = document.querySelector('.temperature-degree')
  let locationTimezone = document.querySelector('.location-timezone')

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position);
      long = position.coords.longitude
      lat = position.coords.latitude

       // const proxy = `https://cors-anywhere.herokuapp.com`
       // const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e2f4587319117dd7b2727d22ce7edc4d`
     const api = `http://api.weatherstack.com/current?access_key=dd214991cf2cf7f409cb5fd635adf8f3&query=${lat},${long}`


      fetch(api)
        .then(res =>{return res.json()})
        .then(data =>{
          console.log(data)
          console.log(data.current.temperature)
          // const temperature = data.current.temperature

          // console.log(temperature);
          temperatureDegree.textContent = data.current.temperature
          temperatureDescription.innerText = data.current.weather_descriptions[0]
          locationTimezone.innerText = data.location.timezone_it
        })
        .catch(err =>{
          console.log(err);
        })
    })


  }else{
    h1.textContent = "This feature will not work with out the geolocation"
  }
})
