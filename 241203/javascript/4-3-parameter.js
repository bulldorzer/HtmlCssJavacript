// default Parameter
// 호출했을때 인수값을 전달하지 않으면 기본값으로 설정된다.
// 인수 값은 반드시 순서대로 매개 변수에 들어간다.
function greeting(name='홍길동',interest) {
    console.log(` 안녕! ${name}님`);
    console.log(` 내 관심사는 ${interest}`);
}
// 기본 default인 홍길동이 이름값에 들어가지만 interest는 값저장이 없으므로 undefined
greeting(); 
greeting('축구');
greeting(undefined,'축구');
greeting('원빈','축구'); // 인수,인자,arguments,args

function defaulttest(x,y=x+3 ) {
    console.log(`x : ${x}, y : ${y}`);
}

defaulttest(2,3);
defaulttest(2);