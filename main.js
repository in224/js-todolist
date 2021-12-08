//html 요소들을 저장함
const input = document.querySelector('#input');
const add = document.querySelector('#add');
const del = document.querySelector('#del');
const ul = document.querySelector('#todo-list');

//목록에 추가하는 함수
const addToDoList = function() {
    //내용이 없으면 알림
    if (input.value === "") {
        alert("내용을 입력해주세요");
        input.focus();
        return;
    }

    //목록과 체크박스, 수정버튼, 삭제버튼 생성
    const li = document.createElement('li');
    const span = document.createElement('span');
    const toDoList = document.createElement('input');
    toDoList.id = "toDoList";
    toDoList.style.border = "0";
    toDoList.style.outline = "0";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const modifyText = document.createElement('button');
    modifyText.innerHTML = '수정';

    const newButton = document.createElement('button');
    newButton.innerHTML = '삭제';

    //목록에 추가
    ul.appendChild(li);
    li.appendChild(span);
    span.textContent = savedTime();
    li.appendChild(toDoList);
    toDoList.value = input.value;
    toDoList.readOnly = true;
    li.appendChild(checkbox);
    li.appendChild(modifyText);
    li.appendChild(newButton);
    input.value ="";
    input.focus();

    //체크박스 체크여부에 따라 취소선 유무
    checkbox.addEventListener('change', (event) => {
        const cancelLine = "line-through";
        
        if (toDoList.style.textDecorationLine === cancelLine) {
            toDoList.style.textDecorationLine = "";
            span.style.textDecoration = "";
        } else {
            toDoList.style.textDecorationLine = cancelLine;
            span.style.textDecoration = cancelLine;
        }
    })

    //해당 라인 수정 버튼
    modifyText.addEventListener('click', (event) => {
        checkbox.hidden = true;
        toDoList.hidden = true;
        modifyText.hidden = true;
        newButton.hidden = true;
        const imsi = toDoList.value;
        const newSaved = document.createElement('button');
        const newInPut = document.createElement('input');
        newSaved.innerHTML = "저장";
        newInPut.id = "newInPut";
        newInPut.value = imsi;

        li.appendChild(newInPut);
        li.appendChild(newSaved);
        newInPut.focus();
        
    
        newSaved.addEventListener('click', () => {
            const changeText = newInPut.value;
            checkbox.hidden = false;
            toDoList.hidden = false;
            modifyText.hidden = false;
            newButton.hidden = false;
            newInPut.hidden = true;
            newSaved.hidden = true;
            toDoList.value = changeText;   
            span.textContent = savedTime();
        })
    });

    // 해당 라인 삭제 버튼
    newButton.addEventListener('click', (event) => {
        if (confirm('정말로 삭제하시겠습니까?')) {
            li.remove();
        }
    });
}

// 시간 출력하는 함수
const savedTime = function() {
    const dateNew = new Date();
    const year = dateNew.getFullYear();
    const month = dateNew.getMonth() + 1;
    const date = dateNew.getDate();
    const hours = dateNew.getHours();
    const min = dateNew.getMinutes();
    const sec = dateNew.getSeconds();

    return `[${year}-${month}-${date} ${hours}:${min}:${sec}]    `;
}



//입력창에서 엔터키 누르면 추가하는 함수
const enter = function() {
    if(window.event.keyCode == 13) {
        addToDoList();
        input.focus();
    }
}

//추가하는 버튼
add.addEventListener('click', (event) => {
    addToDoList();
})


// 모든 목록 삭제 버튼
del.addEventListener('click', (event) => {
    if (confirm('모두 삭제하시겠습니까?')) {
        ul.textContent = "";
    }
})