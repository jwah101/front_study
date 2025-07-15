const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};


const country = document.querySelector("[name='country']")
const name = document.querySelector(".name")
const temp = document.querySelector(".temp")
const description = document.querySelector(".des")

country.addEventListener('change', () => {
  console.log(country.value)

  // console.log(countryCoordinates['한국'])

  const select = countryCoordinates[country.value];

  console.log(select);

  const lat = select.latitude;
  const lon = select.longitude;
  
  console.log(`위도:${lat} 경도:${lon}`)
  
  const APIKEY = `6179175d0faed8ddbeb151bec997faa9`
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`
  
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    name.innerHTML = "수도 : "+data.name;
    temp.innerHTML = "현재 온도 : "+data.main.temp+"도";
    description.innerHTML = "현재 날씨 : "+data.weather[0].description;

  })
  
  }

)
