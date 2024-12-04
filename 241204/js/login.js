// 아이디, 비밀번호 객체에 저장
const user_info = {
    id : 'korea', 
    pw : 'abcd1234@@' // 영어소문자, 숫자, 특수문자로 이루어진 비밀번호로 설정
}

// 필요한 요소를 선택해서 변수에 담아 놓기
const box_color = document.getElementsByClassName('box_color');
const input_box = document.getElementsByClassName('input_box');

const user_id = document.getElementById("id");
const user_pw = document.getElementById("pw");
const error_message = document.getElementsByClassName("error_message")[0];
const login_btn = document.getElementById("login_btn");


// 정규식 : 영어소문자, 숫자, 특수문자가 1개 이상 반드시 포함되어야 한다
const regex = /(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]+/;

// input상자 css 디자인
for(let i = 0; i < box_color.length; i++){

    // click => 마우스 왼쪽버튼으로 클릭해 커서가 들어왔을 때 이벤트
    input_box[i].addEventListener('click', function(){
        box_color[i].classList.add('label_size_change');
        box_color[i].classList.add('border_change');
    });
    
    // blur => 커서가 벗어날때의 이벤트
    input_box[i].addEventListener('blur', function(){
        if(this.value == ""){
            box_color[i].classList.remove('label_size_change');
        }
        box_color[i].classList.remove('border_change');
        
    });
    
}

// login_btn을 클릭하면 아래의 동작 수행
login_btn.addEventListener('click', function(){

    /*
    user_id, userPW 값 검사
    1) id, pw 둘 다 입력 안 된 경우 - 메시지 처리
    2) id 입력 안 된 경우
    3) pw 입력 안 된 경우
    4) pw가 4~12글자가 아니면- 아이디는 4~12글자 입니다.
    5) pw가 숫자, 문자, 특수문자 포함 각각 반드시 1개 이상 포함 - 정규식 활용
    */

    let id_value = user_id.value;
    let pw_value = user_pw.value;
    
    if(id_value =="" &&  pw_value==""){
        error_message.innerText = "ID와 PW를 입력해주세요";

    }else if(id_value ==""){
        error_message.innerText = "ID를 입력해주세요";

    }else if(pw_value ==""){
        error_message.innerText = "password를 입력해주세요";

    }else if(id_value.length < 4  || id_value.length > 12){
        error_message.innerText = "아이디는 4~12글자 입니다.";

    }else if(!regex.test(pw_value)){ // 정규식 검사 - 폼에서 입력 받은 값을 검사
        error_message.innerText = "비밀번호는 영문소문자, 숫자, 특수문자로 구성되어 있습니다.";
    }
    else{ 
        // 모두 입력된 상태

        // - 객체에 담긴 user_id, user_pw가 일치하는 검사
        // - 입력받은 내용과 일치하면 - alert('로그인성공')
        // - 실패하면  - 아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 확인해주세요.

        if(id_value == user_info.id && pw_value == user_info.pw){
            error_message.innerText ="";
            
            alert('로그인 성공');
        }else{
            error_message.innerText = "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 확인해주세요.";
        }
        
        user_id.value = "";
        user_pw.value = "";
    }
    
});
