
// 함수 기본형
// 함수 기본형은 호이스팅이 가능해짐
함수1();

function 함수1(){
    console.log('함수 1 유형');
}

// 함수 표현식(Function Expression)
// 함수2 유형 = 반드시 선언 먼저 해주고 호출해야함
// 변수에 익명함수를 매치한다.
// 가독성 높이는데 도움
// 함수2(); //에러
const 함수2=function(){
    console.log('함수 2 유형');
}
함수2();

// 즉시실행 함수 - 이름x 호출x 실행된다
// 선언과 동시에 즉시 실행
// 1) 함수 초기화 할때 사용 2) 재사용 필요없는 일회성 동작 구현
// ( function(){} ) ();
(
    function () {
        console.log('즉시 실행함수!');
    }
)();

let n = ( function(x,y){
    return x+y;
}) (3,5);
console.log(n);

// 객체 안에 함수 들어갈 수 있음 (메서드)
const calculator ={
    ver : '1.0',
    add : function(x,y){return x+y;},
    minus : function(x,y){return x-y;}
}
console.log(calculator.add(3,4));
console.log(calculator.minus(3,4));

const calc = ['korea It',2023,function(x,y){
    return x*y;
}]

console.log(calc[2](3,4));