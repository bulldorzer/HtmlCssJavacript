
console.log(this);

const user ={
    firstName : 'Tess',
    lastName : 'jang',
    getFullName : function(){
        return `${user.firstName} ${user.lastName}`
    }
}

const admin ={
    firstName : '몽룡',
    lastName : '이',
    // 아래처럼 줄일 수 있음
    // getFullName : getFullName
    getFullName
}

function getFullName(){
    return `${this.firstName} ${this.lastName}`
}
//일반 함수 this - 나를 호출하는 영역을 가리킴
// 화살표 함수 - this - windows임
function getfull(){
    console.log(this);
    // 나를 호출하는 영역을 가리킴
    // 객체에서 호출하면 객체가 this
    // 일반 영역에서 호출하면 windows(최상위)
}
// const getFullName=() =>{
// // 화살표 함수 안에서 this는 window를가리킴 (브라우저 가리킴)
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`
// }

console.log(user.getFullName());
console.log(admin.getFullName());

// 객체 안에 함수 만들때, 일반 함수 or 화살표 함수?
// 객체안에 변수/함수 호출을 하니까 => 일반함수