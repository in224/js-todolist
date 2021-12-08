const input = document.querySelector('#input');
const add = document.querySelector('#add');
const del = document.querySelector('#del');
const ul = document.querySelector('#ul');

//추가하는 버튼
add.addEventListener('click', (event => {
    //내용이 없으면 알림
    if (input.value === "") {
        alert("내용을 입력해주세요");
        document.getElementById('input').focus();
        return
    }

    //목록과 체크박스, 삭제버튼 생성
    const li = document.createElement('li');
    const newButton = document.createElement('button');
    const checkbox = document.createElement('input');
    newButton.textContent = '삭제';
    checkbox.type = 'checkbox';

    //목록에 추가
    ul.appendChild(li);
    li.textContent = input.value;
    li.appendChild(checkbox);
    li.appendChild(newButton);
    input.value ="";
    document.getElementById('input').focus();


    //체크박스 체크여부에 따라 취소선 유무
    checkbox.addEventListener('change', (event) => {
        if (li.style.textDecorationLine === "line-through") {
            li.style.textDecorationLine = "";
        } else {
            li.style.textDecorationLine = "line-through"
         }
    })
    
    // 해당 라인 삭제 버튼
    newButton.addEventListener('click', (event) => {
        const yesNo = confirm('정말로 삭제하시겠습니까?');

        if (yesNo) {
            li.remove();
        }

      
    })
}))

// 모든 목록 삭제 버튼
del.addEventListener('click', (event) => {
    const yesNo = confirm('모두 삭제하시겠습니까?');

    if (yesNo) {
        ul.textContent = "";
    }
})