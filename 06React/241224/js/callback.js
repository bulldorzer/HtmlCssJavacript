// 서버에 요청을 보내는 방법
/*
    1) a 태그 - url을 통해서 보내는 방법 -get방식
    http://localhost:8080//list?category=cat&age=20

    2) form Data 통해서 요청 - GET/POST

    <form action="/edit" method="POST">
        <input name="category" type="text">
        <input name="age" type="text">
        <button type="submit">버튼</button>
    </form>

    새로고침 X
    3) fetch
    - GET, POST, PUT, DELETE
    - 담고 싶은 정보고 기재해서 보내줄 수 있다.

    기본문법
    fetch는 요청을 보내면 promise 객체라는 형태로 응답이 된ek.
    promise 객체 - 처리했다 , 처리못했다. 데이터를 담아서옴
    fetch (url,option)
        .then(response ->{
            // 응답내용처리
        })
        .then(response ->{
            // 응답내용처리
        })
        .catch(error =>{
            // 에러처리    
        })
    const option = {
        method : 'POST', // 데이터전송
        headers : { 'Contents-Type' : 'application/json' }, // 데이터 타입
        body : JSON.stringify({ id : 1, name : 'kim', age : 30 }) // JSON 데이터 형태로 변환함
    }
    fetch (url,option{객체형식})
*/
// 옵션이 비어있으면 get방식이 default
// delete : 옵션에 body 사용하면 오류 날수도 있음 사용 x
// post, put만 body 담아서 보냄

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

const btn = document.getElementById("btn");
btn.addEventListener('click',fetch_test)

function fetch_test() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log('DATA',data))
  .catch(error => console.error('Error fetching data',error));
}

/*
    * fetch 특징 *
    1) 비동기 처리에 적합하디
    2) fetch의 응답결과 - Promis 객체이다

    ※ 비동기 처리 vs 동기 처리
    동기처리
    - 순서대로 처리 (1->2->3 .. 순서대로 처리)
    - 앞순서 안끝나면 뒷순서는 끝날떄까지 기다려야함
    - 처리할량이 많으면 대기시간이 길어짐, 처리속도가 느릴 수 있음

    비동기처리
    - 다음 작업 기다리지 않고 즉시 실행 처리가능
    - 병렬적 처리, 비 동시적 처리
    - 빠르고, 효율적
    - 서버요청, 파일 읽기/쓰기, 타이머 설정...

    ex) 은행원이 5명대기 온 고객 순서대로 다받아서 처리
*/

// 비동기 처리 예시
// 동시 다발적으로 실행이 됨 ( 순서가 있기는 함 )
// 끝나느 순서는 다를 수 있음.
console.log("A 작업 시작");
setTimeout(() => {
    console.log("B 작업 시작 (after 2second)");
}, 2000);
console.log("C 작업 시작");

const time = 500;
// 가상의 함수 선언 (비동기 작업을 모사하기 위해 setTimeout 사용)
const doSomething = (callback) => {
    setTimeout(() => {
      console.log("doSomething 완료");
      callback("result1");
    }, time);
  };
  
  const doSomethingElse = (result1, callback) => {
    setTimeout(() => {
      console.log(`doSomethingElse 완료: ${result1}`);
      callback("result2");
    }, time);
  };
  
  const doAnotherThing = (result2, callback) => {
    setTimeout(() => {
      console.log(`doAnotherThing 완료: ${result2}`);
      callback("result3");
    }, time);
  };
  
  const doFinalThing = (result3, callback) => {
    setTimeout(() => {
      console.log(`doFinalThing 완료: ${result3}`);
      callback("finalResult");
    }, time);
  };
  
  // 수정된 실행 로직
  // 이 로직처럼 하기엔 복잡하기 떄문에 fetch-then-catch구문으로 사용하여 가독성 좋게 한다
  doSomething((result1) => {
    doSomethingElse(result1, (result2) => {
      doAnotherThing(result2, (result3) => {
        doFinalThing(result3, (finalResult) => {
          console.log(`최종 결과: ${finalResult}`);
        });
      });
    });
  });



   // then~ 특징 : promis 객체 데이터 이어야 처리가 됨
  // doSomething에서 return값이 
  // 그 다움에 오는 then의 매개변수로 들어간다.
//   doSomething()
//   .then((result1) => doSomethingElse(result1))
//   .then((result2) => doAnotherThing(result2))
//   .then((result3) => doFinalThing(result3))
//   .then((finalResult) => console.log(finalResult))
//   .catch((error) => console.error(error));