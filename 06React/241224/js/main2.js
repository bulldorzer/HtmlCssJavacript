//함수
function 함수() {
    console.log("함수1");
}

// 함수 표현식 (function Expression)
// 반드시 사전에 선언, 변수에 익명함수가 매칭 가독성 도움
const 함수2 = function(){
    console.log("함수2");
}

// 화살표 함수
const 함수3 = () =>{
    console.log("함수3");
}
// 위에 3가지 함수타입시 반드시 호출하여 사용함
함수();
함수2();
함수3();

//즉시 실행 함수 - 호출 없이 바로가능
let message = '테스트 중';
(function 함수4(){
    console.log("함수4", message);
})(message)

// 객체 안에 함수
const calculator = {
    add : function (x,y) {
        return x+y;
    },
    minus : function (x,y) {
        return x-y;
    }
}

// 매서드 방식
console.log("덧셈 => "+calculator.add(3,4)); 
console.log("뺄셈 => "+calculator.minus(3,4));

// 배열 안에 함수
const calc = ['korea it',2024,function (x,y){return x*y;}];

console.log(calc[2]); // calc[2] 자체가 익명함수의 이름이 된다.
console.log(calc[2](3,4));

// destructuring = 구조분해2
console.log("------------구조분해------------------------");
const macBook = {
    title : '맥북 프로 16형',
    price : 300,
    memory : '16g',
    storage : '1TB'
}

function print1(obj) {
    const {title,price,memory,storage} = obj;
    console.log("titie,price,memory,storage "+`${title}/${price}/${memory}/${storage}`);
}

print1(macBook);

function print2({title,price,memory,storage}) {
    console.log('2) 매개변수에서 구조 분해');;
    console.log("titie,price,memory,storage "+`${title}/${price}/${memory}/${storage}`);
}
print2(macBook);