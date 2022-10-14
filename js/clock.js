const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();    // Date는 시간,날짜를 보여주는 메소드
    const hours = date.getHours().toString().padStart(2,"0");   
    // date.getHours() : 시간을가져옴 , toString() : 가져온 시간을 문자열로 바꿔줌, PadStart(2,"0") : 2칸으로 만들고 부족하면 0 으로 채움 
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;    // html에 해당 시간을 넣어줌 
}
getClock(); // 새로고침할시 바로적용되는걸 보여주기 위해서 한번은 실행한다.
setInterval(getClock, 1000);    // 특정시간마다 호출 (실행함수, 시간 (1ms))
