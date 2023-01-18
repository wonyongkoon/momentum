const images = ["0.jpeg", "1.jpeg","2.png","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg","12.jpeg"];    // 이미지를 가져오는 배열 (파일명이랑 반드시 똑같이 써함)
const chosenImage = images[Math.floor(Math.random() * images.length)]   // 이미지를 랜덤으로 불러오게 하기위해 랜덤숫자 생성
//Math.floor() : 소수점 아래 버림 적용, Math.random() : 랜덤숫자 생성 , images.length : 이미지 배열의 길이 인데 여기서는 0에서 몇까지의 랜덤을 부를꺼냐라는 용도로 사용
const bgImage = document.createElement("img");  // HTML에 img tag 생성
const BACKGROUND_CLASSNAME = "background"   // 이런류의 문자를 자주 쓸 경우 변수를 사용하는게 관리하기 좋음
bgImage.src = `img/${chosenImage}`;     //생성된 img tag에 img주소(링크)를 넣어줌
bgImage.className = BACKGROUND_CLASSNAME;   // 클래스 네임 넣어줌

document.body.appendChild(bgImage); // 생성된 document를 body에 추가
