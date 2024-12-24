// ----------------------------------------------------------------------------
// destructuring = 구조분해
const member = ['유나', '효연', '태연', '티파니', '수영'];
const macBook = {
    title : '맥북 프로 16형',
    price : 300,
    memory : '16g',
    storage : '1TB'
}
let [a,b,c,...etc] = member;
console.log(a,b,c,etc);

let {title,memory} = macBook; // macbook객체에서 해당하는 프로퍼티 값 추출
console.log(title,memory);

//프로퍼티 값을 담을 변수명을 변경하고 싶을 경우 {프로퍼티 : 변수명}
let {title : 제품명, memory : 용량} = macBook;
console.log("title,memory "+title,memory);
console.log("제품명,용량 "+제품명,용량);

const woman = { name: 'Alice', age: 30, addr : '서울', pass : false };
const {name,age,tel,...info} = woman;
console.log(name,age,tel,info);
// tel : 없는 프로퍼티 undefined로 표시됨

let keyName = '';
const keyMap = {
    1: 'title',
    2: 'price',
    3: 'memory',
    4: 'storage'

}

let pick = prompt('1)제품명 2)가격 3) 메모리 4) 용량'); // 입력창뜸
// 입력받은 값은 문자열이기 떄문에 *1을 하면서 숫자로 변환이 된다

keyName = keyMap[pick*1];
let {[keyName] : option} = macBook;
console.log("macBook "+keyName+" "+option);


// ----------------------------------------------------------------------------

// spread - 배열- [...배열명], 객체 - {...객체명} - 값쪼개기,
// 문자, 배열, 객체와 같이 반복가능한 객체를 개별요소로 펼치는 문법

console.log("-------------객체 스프레드----------");
const obj1 = {name:"홍길동",age:30};
const obj2 = {addr: "서울", tel : '010-0000-0000'};

//객체 합치기
// 주의사항 : 프로퍼티(key) 겹치면 안됨
const man = {...obj1, ... obj2};

console.log(man) // 2개의 객체 정보를 합쳐서 새로운 객체 생성됨

// 기존 객체 변경없이 새로운 객체생성
const newMan = {...man, birthday : '2000-12-24'}
console.log(man);
console.log(newMan);

// 정체성? 배열, 객체
// 배열값에 객체들이 공통적으로 addr : 서울 추가
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// 배열 반복 -> 가공 -> 새로운 배열 생성
// map((요소,인덱스,전체배열)=>{})
const newUsers = users.map((el,i)=>{
    return {...el,id:i}
});
console.log(newUsers); // 객체마다 id값이 추가되어, 배열로 생성됨

console.log("-------------배열 스프레드----------");
const arr = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

let copy1 = [...arr]; // 깊은 복사(복제) - 값을 쪼개서 새로운 배열로 저장(별개의 배열이 생성)
let copy2 = arr; // 얕은 복사 - 주소복사

copy1[0] =19;
copy2[0] =1000;


console.log(arr);
console.log(copy1);
console.log(copy2);

// 배열합치기
let union = [...arr,...arr2]; // 2개의 배열이 합친 새로운 배열이 생성
console.log(union);

// 매개변수로 받기
const sum = (x,y, ...rest) =>{
    console.log(x,y,rest);
}

sum(union); // 첫번째 배열 x에 union 배열 전체가 들어감, y:undefined, ...rest:[]
sum(...union); // 첫번째 : 1000, 두번쨰 : 2 , 세번쨰 나머지 값 배열




// ----------------------------------------------------------------------------
let n = 10;

// and : false가 1번이라도 나오면 -- 이후로는 보지도 않음
console.log( true && true );
console.log( true && false );
console.log( n > 20 && true );
console.log( false && false );

console.log('-------------');

// or : true가 1번이라도 나오면 -- 이후로는 보지도 않음
console.log( true|| true );
console.log( true || false );
console.log( false || true );
console.log( false || false );
