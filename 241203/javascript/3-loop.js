// 반복문
let i =0;
/*

while (i<3) {
    console.log(i);
    i++;
}



*/

// 객체
// 1. 리터럴 객체 => 값을 초기화한 객체
let man ={
    name : 'john',
    age : 30,
    addr : 'seoul'
}

//배열
let arr = [1,2,3];


// 모두 같은 개념
// 객체명.속성
// 객체명.프로퍼티
// 객체명.멤버변수
// 객체명.key
console.log("man.name",man.name, man['name']);
console.log("man.age",man.age, man['age']);
console.log("man.addr",man.addr, man['addr']);

// 인덱스 번호로 직접 값에 접근
for (let i = 0; i < 3; i++) {
    console.log(i);
    
}

// 객체 반복 순회문 for in
for (const key in man) {
    console.log(man[key]);
}
// 객체 값을 반복 초기화 할땐 for in이 좋다
for (const key in man) {
    man[key] = 0;
}
console.log(man);

// 각 값을 num에 옮겨놓고 사용
//     ㄴ 자바에서 향상된 for문과 비슷함
//     ㄴ 배열의 모든 값을 바꿀땐 사용하지않고 기본 for문을 사용한다
for (const num of arr) {
    console.log("for of",num);
}

// 배열.forEach( (매개변수)->{실행문})'
// = 배열의 갯수만큼 반복한다.
arr.forEach(e=>{
    console.log("forEach",e); // 배열의 각요소가 출력됨
});

// 현재값, 인덱스, 전체배열
let newArr2 = arr.map((el,index,arr)=>{
    console.log("el,index,arr",el,index,arr);
    return el*10;
});
console.log("newArr2",newArr2);

let newArr3 = arr
console.log("newArr3",newArr3);

let newArr = arr.map(e=>{
    return e*10;
});

console.log("newArr",newArr);