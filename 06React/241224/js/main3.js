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
const btn2 = document.getElementById("btn2");
const list = document.getElementById("list");
btn.addEventListener('click',fetch_test);
btn2.addEventListener('click',fetch_test2);

// function fetch_test() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     // Promis 객체형으로 사용할수 없어 .json() 또는 .text()로 변환하여 사용해야함
//     // .then(response => response.text()) 
//     .then(response => response.json())
//     .then(data => console.log('DATA',data))
//     .catch(error => console.error('Error fetching data',error));
// }

function fetch_test() {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // Promis 객체형으로 사용할수 없어 .json() 또는 .text()로 변환하여 사용해야함
    // .then(response => response.text()) 
    .then(response => response.json())
    .then(data => {
        list.innerHTML='';
        
        // 배열에 담아서 처리
        let arr = [];
        arr.push(data);

        arr.map(el=>{
            const li = document.createElement('li');
            li.textContent = `author : ${el.id} / title : ${el.title}`;
            list.appendChild(li);
        });

        // data.map(el=>{
        //     const li = document.createElement('li');
        //     li.textContent = `author : ${el.id} / title : ${el.title}`;
        //     list.appendChild(li);
        // });
    })
    .catch(error => console.error('Error fetching data',error));
}
//async, await 활용한 구문
async function fetch_test2() {
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
        return null;
    }
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

// 콜백함수 = 함수 지나치게 중첩되면 복잡해진다.
// Promise - 데이터 + 상태 정보를 같이 담고 있는 객체
/*
    1. Pending(대기)
    - 초기상태, 작업완료X, 비동기 작업 진행중
    2. Fulfilled(이행/성공) - 작업성공
    - 성공하고 return된 값을 .then()이 처리함
    3. Rejected (거부) - 작업실패
    - .catch()로 처리함

    * 한번 상태가 Fulfilled 또는 Rejected 상태가 되면 Pending로 될수 없음
*/ 
