const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"   // 반복되는 문자가 있을경우는 변수로 지정해주는게 좋음
const USERNAME_KEY = "username"

// 로그인 버튼을 눌렀을시에 발생하는 함수
function onLoginSubmit(event){
    event.preventDefault(); // submit 이벤트는 실행시 새로고침 하기때문에 preventDefault()로 기본 이벤트를 중지시켜줌
    const username = loginInput.value;  // 사용자 입력값을 변수에 할당
    loginForm.classList.add(HIDDEN_CLASSNAME);  // 사용자 이름 입력하는 로그인폼을 숨겨줘야하기 때문에 hidden 클래스 추가    
    localStorage.setItem(USERNAME_KEY,username);  // localStroage에 아이템 추가
    paintGreetings(username);   // 입력받은 이름을 그려줌(출력)
}

// 유저의 이름을 출력해주는 함수
function paintGreetings(username){
    greeting.innerText = `안녕하세요. ${username} 님`;   // 텍스트를 변경해줌
    greeting.classList.remove(HIDDEN_CLASSNAME);    // 기본설정이 히든이라 숨겨져 있지만 해당 함수 실행호 hidden 클래스를 제거해줌
}

//-*-*-*-*-*-* 가장 먼서 동작 1 *-*-*-*-*-*-
const savedUsername = localStorage.getItem(USERNAME_KEY);   // 로컬 저장소에 저장된 username를 가져옴
if(savedUsername === null){ // 로컬 저장소에 저장된 id값이 없다면
    loginForm.classList.remove(HIDDEN_CLASSNAME);   // 로그인창의 히든클래스를 삭제하고 보여준다
    loginForm.addEventListener("submit", onLoginSubmit) // 서브밋 이벤트로 로그인폼 함수 실행
}else{
    paintGreetings(savedUsername);  // id값이 있다면 값을 그대로 뿌려줌
}
