const fruits = ['apple','banana','orange'];

// 기본형식
// let 변수명 = 배열명.map((e)=>{});\

/*
    map을 이용하여 fruits를 대문자로 모두 변환하여 새로운 배열을 만드시오.
    newfruits 로 생성
*/
//                 현재값, 인덱스, 전체배열
let newfruits = fruits.map((el,index,arr)=>{
    return el.toUpperCase();
})

for (const result of newfruits) {
    console.log(result);
}

// 객체가 배열 형태로
const users =[
    {name:'Alice',age:30},
    {name:'Bob',age:25},
    {name:'Charlie',age:35}
];

// 객체중에서 이름만 뽑아서 배열로 만들어 보기
let userNames = users.map(e=>e.name);
console.log(userNames);

for (const names of userNames) {
    console.log(names);
}

// 유저의 나이면 새로운 배열로 추출하고 나이의 평균을 구하기
let userAge = users.map(e=>e.age);
console.log(userAge);

let total = 0;
userAge.forEach(e=>{
    total+=e
    console.log("userAge",e);
})
let avg = total/userAge.length;
console.log("나이 평균", avg);

//각각의 배열을 합쳐서 새로운 객체 배열로 만들기
const names = ['Alice','Bob','Charlie'];
const age = [30,27,39];

let obj = names.map((num,i)=>{
    return{name:names[i], age : age[i]};
})
console.log(obj);

// 프로퍼티 추가
const person = {name:'anne',age:'27'};
person['addr']='서울';
console.log("Person : ",person);

const addrList = ['서울','경기','인천'];

// addrList 값을 user의 각 객체에 addr 키값을 추가 하시오
// 새로운 리스트 생성

let newUser = users.map((el,i)=>{
    // console.log(users);
    // return el['addr']=addrList[i];

    el['addr']=addrList[i];
    return el;
})
console.log(newUser);