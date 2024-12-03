// 배열 객체 값 쪼개기

/*
    ... : spread
    문자, 배열, 객체와 같이 반복 가능한 객체를 개별요소로 펼치는 문법
 */

const person = {name:'Alice',age:30};

const arr = [1,2,3,4,5];

const sum = (a,b,c) =>{
    return a+b+c;
}

// ... : rest (나머지 배열로 받기)
const sum1 = (a,b,...c) =>{
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    return a+b+c;
}

console.log("sum(arr)",sum(arr)); // a에 arr이 들어간다
console.log("sum1(arr)",sum1(...arr)); // a,b,c에 arr이 쪼개져서 들어간다

// 배열 병합
const arr01 = [1,2];
const arr02 = [3,4,5];
const combined = [...arr01,...arr02];
console.log(combined); // arr01과 arr02배열이 합쳐져 새로운 배열이 탄생


// 배열 복사

// 얕은복사
// copy1의 이름으로 arr에 접근해서 값을 조작가능
// copy1, arr 접근하면 같은곳 접근
let copy1 = arr;

// 깊은복사
let copy2 = [...arr]; // 원본과 별개로 다른곳에 저장

arr[0]=100;

console.log(copy1);
console.log(copy2);


// 배열 스프레드 - [ ]
// 객체 스프레드 - { }
const woman = {name:'Alice',age:30};
const newWoman = {...woman,addr:"서울"};
console.log(newWoman);

// 키값이 모두 달라야 서로 합쳐짐 키값이 같으면 나중값으로 초기화됨
const obj1 = {a:'Alice',b:30};
const obj2 = {c:'Bob',d:25};
const combined_obj2 = {...obj1,...obj2};
console.log(combined_obj2);

// 모든 객체에 addr : '서울', pass : false 기본값으로 추가
const users =[
    {name:'Alice',age:30},
    {name:'Bob',age:25},
    {name:'Charlie',age:35}
];
/*
const newUsers = users.map((e)=>{
    e['addr']='서울';
    e['pass']=false;
    return e;
});
 */
const newUsers = users.map((e)=>{
    return {...e,addr:'서울',pass:false};
});
console.log(newUsers);

for(user of users){
    user['addr']="서울";
}
console.log(users);

for (let i = 0; i < users.length; i++) {
    const element = users[i];
    
    console.log(element);
    
}