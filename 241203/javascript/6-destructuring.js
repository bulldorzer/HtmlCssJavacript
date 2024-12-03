// destructuring = 구조 분해

// 배열
const rank = ['유나', '효연', '태연', '티파니', '수영'];

let [a, b, c, ...etc] = rank;
console.log(a);
console.log(b);
console.log(c);
console.log(etc);

//객체
const person = {name:'Alice',age:30,addr:'서울',pass:false};
// const {name,age} = person;
// let name = '태연'; 상단에서 해당 key값의 변수가 있다면 사용x
const {name,age,...info} = person;
// 없는 key값을 넣으면 undefined가 된다.
const {tel} = person;
// console.log({name,age,...info});
// console.log(person['tel']);

/*
    let name = person.name;
    let age = person['age'];
*/

console.log("person['name']",name);
console.log("person['age']",age);
console.log("person['info']",info);
console.log("person['tel']",tel);

const macBook = {
    title : "맥북 프로 16형",
    price : 300,
    memory : '16g',
    Storage : '1TB'
}
// 1) 프로퍼티와 변수명이 같으면
// let {title,price} = macbook;
// 2) 프로퍼티와 변수명이 다르면 {프로퍼티 : 변수명}
let {title:productName, price : pay} = macBook;
console.log(productName,pay);

let pick = prompt('1) 제품명 2)가격 3)메모리 4)용량');
let propertyName1 = '';


switch (pick*1) { // *1을 하면 숫자형으로 바꿔줌
    case 1:
        propertyName1 = 'title';
        break;
    case 2:
        propertyName1 = 'price';
        break;
    case 3:
        propertyName1 = 'memory';
        break;
    case 4:
        propertyName1 = 'Storage';
        break;
    default:
        break;
}


// 내가 뽑을 프로퍼티를 변수에 저장
let propertyName = 'title'; 


const propertyMap = {
    1:'title',
    2:'price',
    3:'memory',
    4:'Storage'


}
// 없는 키값이 들어오는 반환되는 값은 undefined
// 객체 - 없는 키값, 배열 - 없는 인덱스 번호 호출 - undefined
// 1)있으면 = true, 없으면 undefined = false;
// 2) 값이 있으면 반환값을 넣어주고 끝남(다음항으로 넘어가지않음)
//    없으면 다음항으로 넘어가서 ''를 반환하게됨
// 3) undefined에 연산을 시도하면 NaN값이 반환됨
// 4) ! = not 연산 / true->false, false->true
if( pick*1 ==0 || isNaN(pick*1)){ //문자열 입력한경우
    console.log('문자 입력')
    
}else{
    // 숫자입력
    propertyName = propertyMap[ pick*1 ] || '';
    const{[propertyName] : key} = macBook;
    console.log(key?key:'1~4사이 입력');
}


// macBook에서 title의 프로퍼티 값을 뽑아와서
// key에 할당 => key값이 된다.
// const {title : key,...rest} = macBook;

// 내가 뽑을 프로퍼티의 대상을 그대로 적용 []안에
const {[propertyName1] : key,...rest} = macBook;
// console.log(key);
// console.log(rest);