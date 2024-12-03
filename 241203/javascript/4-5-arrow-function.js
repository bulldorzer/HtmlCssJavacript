
// function 함수1(){}
// 함수1();

// let 함수2 = function(){};
// 함수2();

// const 화살표함수 = ()=>{};
const sum = (a,b) => a+b;
console.log("화살표함수 : ",sum(1,2));

// 받아온 값으로 객체 생성해서 리턴하기
// key, value의 변수명이 일치할대, 생략가능
// {name : name, age:age} =>{name,age}

// const getPerson = (name,age)=> {
//     return {name:name, age:age};
// }
//위에 화살표 함수를 아래처럼 줄일수 있음
const getPerson = (name,age)=> ({name, age});

console.log(getPerson("홍길동",30))

// arguments 사용하려면 일반 함수 사용해야함
function nomarlFn(){
    console.log(arguments)
}

nomarlFn(1,2,3);
// 에러발생! 
// 화살표 함수에서는 arguments 사용못함
const arrowFn = () => {
    console.log(arguments)
}

arrowFn(1,2,3);
