// 값으로 함수
// 매개변수로 - 함수의 이름을 받아서 함수 안에서 호추랗여 실행 가능
// 함수 안에 함수가 들어간 것 
// 콜백함수 : 함수가 먼저 실행되고 -> 매개변수로 받은 함수가 실행 (순서가 정해짐)
// 값으로서의 함수 = 콜백함수 이것의

function makeQuiz(quiz, answer, success, fail) {
    if (prompt(quiz) === answer) {
        console.log(success());
    }else{
        console.log(fail());
    }
}

function getSuccess() {
    return '정답'; // 어떤 함수의 리턴값이 함수가 될 수 있다.
}
function getFail() {
    return '오답';
}
const question = '5+3=?';
// console.log(prompt(question));
makeQuiz(prompt(question),'8',getSuccess,getFail)

function getPrintHi(){
    return function () {
        console.log("안녕?"); // 고차 함수
    }
}
// 함수의 표현식 : const 함수 = function(){}
// 일급함수 - 이중괄호 사용
// 1) 리턴값이 함수인 함수 호출할때
getPrintHi()();

// 고차함수 호출 방법
// 2) 변수에 한번 저장해서 사용
// getPrintHi()의 리턴값은 함수를 sayHi에 저장
const sayHi = getPrintHi();
sayHi(); // return되서 sayHi에 저장된 함수 호출

// 즉시실행 함수 - 초기화, 일회성
(function(){})();
function getHungry(){
    return function hungry() {
        console.log("배고파??"); // 고차 함수
    }
}

// 함수의 표현식 : const 함수 = function(){}
const hungry = getHungry()();




