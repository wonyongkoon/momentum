const API_KEY = "95062b0ef88945b11bec6f16d38eb752"; // 각자의 API KEY 사용 (https://openweathermap.org/api 에서 발급)

// 위치정보 불러오기를 성공했을때 실행하는 함수
function onGeoOk(position) {    // position 이라는 위치 매개변수를 받음
    const lat = position.coords.latitude;   // 위도
    const lon = position.coords.longitude;  // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  // API를 받아와서 해당 위도와 경도의 지역 정보를 받아오기 위함
    fetch(url)  // fetch는 서버와 통신하기 위함?! 이건 더알아봐야할듯
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");    
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp};`
            city.innerText = data.name;
            //console.log("날씨로딩완료");
        });

    }
// 위치정보 불러오기를 실패했을때 실행하는 함수
function onGeoError() { 
    alert("위치를 알 수 없어 날씨정보를 가져올 수 없습니다.")
}

navigator   // navigator은 사용자의 위치를 알수있는 메소드
    .geolocation    // geolocation 은 위치정보
    .getCurrentPosition(onGeoOk, onGeoError);   // 위치정보를 불러왔을때 성공했을떄와 실패했을때 함수 호출
