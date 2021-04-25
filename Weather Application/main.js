alert("Please update the main.js file with you api key")
window.addEventListener('load',()=>{
  let long
  let lat
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureDegree = document.querySelector('.temperature-degree')
  let locationTimezone = document.querySelector('.location-timezone')
  let temperatureSection = document.querySelector('.temperature')
  const temperatureSpan = document.querySelector('.temperature span')
   let weatherIcon = document.querySelector('img')

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position);
      long = position.coords.longitude
      lat = position.coords.latitude

       // const proxy = `https://cors-anywhere.herokuapp.com`
       // const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e2f4587319117dd7b2727d22ce7edc4d`
     const api = `http://api.weatherstack.com/current?access_key={API KEY}&query=${lat},${long}`


      fetch(api)
        .then(res =>{return res.json()})
        .then(data =>{
          console.log(data)
          temperatureDegree.textContent = data.current.temperature
          temperatureDescription.innerText = data.current.weather_descriptions[0]
          locationTimezone.innerText = data.location.timezone_id
          weatherIcon.src = data.current.weather_icons[0]

          //Formula
          let celsius = (data.current.temperature - 32) * (5/9)

          //Convert the temp
          temperatureSection.addEventListener('click', ()=>{
            if(temperatureSpan.textContent === "F"){
              temperatureSpan.textContent = "C"
              temperatureDegree.textContent = Math.floor(celsius)
            }else{
              temperatureSpan.textContent = "F"
              temperatureDegree.textContent = data.current.temperature
            }
          })
        })
        .catch(err =>{
          console.log(err);
        })
    })




  }else{
    h1.textContent = "This feature will not work with out the geolocation"
  }

  // function setIcons(icon, iconID){
  //   const skycons = new Skycons({color: "white"})
  //   const currentIcon = descrip.replace(/\s/g, "_").toUpperCase()
  //   skycons.play()
  //   return skycons.set(iconID,Skycons[currentIcon])
  // }
})
