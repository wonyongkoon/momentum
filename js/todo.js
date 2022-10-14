const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = [];

// 버튼클릭시 todo list에서 해당 내용 삭제
function deleteToDo(event){
    const li = event.target.parentElement;  // 해당 element가 무엇인지 가져옴
    li.remove();    // 그거 삭제함
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    // toDos에는 삭제된 항목을 제외한 새로운 배열을 적용시키기위해 filter 함수 사용
    saveToDos();   // 다시 localStorage에 추가해줘야함
}

// localStorage에 저장하는 함수
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 입력한 todo list를 화면에 뿌려줌, 버튼도 그려줌
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id  // 삭제 컨트롤을 위해 id 삽입
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");    
    button.innerText = "✖"
    button.addEventListener("click", deleteToDo);    // 버튼에 삭제 이벤트 추가
    li.appendChild(span);   // 반드시 마지막에 추가해주어야함
    li.appendChild(button); // 반드시 마지막에 추가해주어야함
    toDoList.appendChild(li);// 반드시 마지막에 추가해주어야함
}

// todo list 입력하고 초기화
function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value)
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// -*-*-*-*-*-* 가장 먼서 동작 1 *-*-*-*-*-*-
const savedToDos = localStorage.getItem(TODOS_KEY); 
if (savedToDos !== null){   // localStorage에 저장된 todo값 있다면 (없는게 아니라면)
    const parsedToDos = JSON.parse(savedToDos); // localStorage에 있는 항목을 가져와서 JSON.parse로 js가 알아볼수있는 항목으로 변환
    toDos = parsedToDos;    // 기존 todos 는 비어있을테니까 localStorage 에서 가져온 항목으로 대입시켜줌 
    parsedToDos.forEach((item) => paintTodo(item)); // 가져온 항목을 forEach를 통해 하나씩 그려줌 (paintTodo 함수 사용)
}
