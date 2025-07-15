const weatherName = document.querySelector('.weatherName');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');

// 인터넷 접속시 위치정보 사용하는 함수 커넥트지오
function connectGeo(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(`위도:${lat} 경도:${lon}`)

  // api주소 변수에 담아둠
  const APIKEY = `6179175d0faed8ddbeb151bec997faa9`
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`

  fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    weatherName.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    description.innerHTML = data.weather[0].description;
  })

}

function errorGeo(){
  alert('위치정보 연결 실패')
}

//성공 실패 콜백함수에 넣기
//위치정보 넣는 함수
navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);