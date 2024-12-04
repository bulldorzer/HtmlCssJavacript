/* 데이터 가져오기 내보내기 export, import */
import data from './board.js'
console.log(data);

// 
/*
    DOM - Document Object Model
    요소 선택하기
    주의사항 기호가 들어가지 않고 이름만 써준다
    
    단수로 사용하는 것은 인덱스X (id)
        - getElementById
        - querySelector ( 여러개 존재할 경우, 첫번째 것만 선택해옴)

    요소를 복수로 선택하는 것은 
    반드시 접근할때, 인덱스번호를 써줘야한다
    => HTML Collection이라고 하는 데이터형태로 담아오기 때문
    ->유사 배열(배열 기능 사용 제한적) -> 필요에 따라 배열로 변경하여 사용
        HTML Collection : 동적(추가되면 자동 업데이트) 
         - getElementsByTagNameㅡ getElementsByClassName
        Node List : 정적(가져온 시점에서 계속 고정, 업데이트)
         - querySelectorAll

    getElement~ : 기호없이 속성이름으로만 써준다
    querySelector~ : css 선택자로 써준다.
*/
let id = document.getElementById('board'); // id속성은 중복이 안되므로 한개만 가져옴 무조건

// HTMLCollection 형태로 리턴함 => 배열형태로 뱉음 1개여도
let tag = document.getElementsByTagName('li'); //여러개
let className = document.getElementsByClassName('wrap'); //여러개
// let EName = document.getElementsByName(''); //여러개

console.log("id",id);
console.log("tag",tag);
console.log("className",className);

//태그, 클래스, 아이디 모두선택 - css선택자와 동일하게 기록하면 된다.(★기호 포함★)
let querySelector = document.querySelector('.wrap');
let querySelectorAll = document.querySelectorAll('.wrap');
// let board = document.querySelectorAll(".board_list_box");

console.log("querySelector",querySelector);

/*
    querySelectorAll은 NodeList 배열로 리턴함
*/
console.log("querySelectorAll",querySelectorAll);
// console.log("board",board);

/**
 * NodeList, HTMLCollection
 * 공통점
 *  - 유사배열 - 인덱스번호로 선택
 *  - 기능이 제한적 (배열의 모든 기능을 사용 X)
 * 차이점
 *  HTML Collection
 *  - 동적 : 중간에 해당 요소가 추가되면 자동으로 업데이트
 *  - 생성 : getElementsByTagName getElementsByClassName
 *  - 실시간으로 추가, 업데이트가 많은 경우
 *  
 *  Node List
 *  - 정적 : 처음에 로드될때 시점으로 고정, 중간에 추가되어도 업데이트 되지않음
 *  - 생성 : querySelectorAll
 *  - 장점 : 선택자로 자유롭게 선택 가능
 *  - 선택됨 요소들이 한번 사용하고 더이상 변경이 없는 경우
 *  - 만약 업데이트가 된 경우에는 다시 생성 해줘야 함.
 *  - 배열로 변환해서 사용하기도 한다
 */



for (let i = 0; i < tag.length; i++) {
    tag[i].style.color='red';
    tag[i].style.fontSize='24px';
    
}

// className[0].style.fontSize='48px'
id.style.color='red'

// tag.forEach(el => {
//    el.style.color='blue' ;
//    el.style.fontSize='24px' ;
// });

// 3. 자바스크립트로 태그 생성 추가하기
const row = document.createElement('tr'); // tr 태그생성
// 넘버, 제목, 작성자, 조회수, 작성일
const numberCell = document.createElement('td');
const titleCell = document.createElement('td');
const writerCell = document.createElement('td');
const viewCounterCell = document.createElement('td');
const regiDateCell = document.createElement('td');

/*
 위내용 HTML태그 상황
 <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
*/

// 내용 설정
// innerHTML, innerText, textContent
numberCell.textContent = 1;
titleCell.textContent = "강아지가 자꾸 기침해요";
writerCell.textContent = "사랑이견주";
viewCounterCell.textContent = "150";
regiDateCell.textContent = "2024-12-04";

console.log("numberCell",numberCell,titleCell);

// html 안에 추가
const board = document.querySelector(".board_list_wrap tbody")

// tr 안에 td추가
row.appendChild(numberCell);
row.appendChild(titleCell);
row.appendChild(writerCell);
row.appendChild(viewCounterCell);
row.appendChild(regiDateCell);

// tbody안에 tr td 추가
board.appendChild(row);

// 가져온 데이터 반복작업
// 문제 1  프로퍼티를 순회하는 반복문을 사용하여 객체내용을 출력해보시오

// data.forEach(el=>{
//     console.log(el.id);
//     console.log(el.title);
//     console.log(el.writer);
//     console.log(el.viewCount);
//     console.log(el.regidate);
// });


// <강사님의 생각> 
// data.forEach(el=>{
//     for (const key in el) {
//         console.log(el[key]);
//     }
//     console.log("------------<forEach>--------------");
    
// });
// 문제2 각각 출력 el사용하지않고 데이터 출력할 수 있도록 구문 수정 어제 마지만 교시에 배웠던 내용참고

// for (const key in data) {
    
//     console.log(data[key].id);
//     console.log(data[key].title);
//     console.log(data[key].writer);
//     console.log(data[key].viewCount);
//     console.log(data[key].regidate);
//     console.log("------------<forIn>--------------");
// }

// <강사님의 생각> 
// data.forEach(el=>{
//     // console.log(el);

//     // destructuring = 구조분해
//     // {key} = 객체
//     // {key : 변수명} = 객체
//     const {id:no,title,writer,viewCount,regidate}=el;
//     console.log(no);
//     console.log(title);
//     console.log(writer);
//     console.log(viewCount);
//     console.log(regidate);
//     console.log("------------<forEach>--------------");
// });

// <강사님의 생각> 
// data.forEach(({id,title,writer,viewCount,regidate})=>{
//     // console.log(el);
//     console.log(id);
//     console.log(title);
//     console.log(writer);
//     console.log(viewCount);
//     console.log(regidate);
//     console.log("------------<forEach>--------------");
    
// });

// 검색하는 영역에 폼태그 있음
    // id를 이용하여 요소를 가져오고 searchForm변수에 담으시오
    // form태그 가져오기 검색어 입력칸 가져오기 searchKeyword

    /*
     * 이벤트 - 컴퓨터에서 발생하는 어떤 상황
     * 마우스 관련
     * -클릭 이벤트 - click
     * -더블 클릭 - DblClick
     * -마우스 휠 - mousewheel (파이어폭스는 이름이 다름)
     * 
     * 브라우저
     * -scroll ( 스크롤이 움직일 때)
     * -resize (창크기가 조절될 때)
     * 
     * 키보드
     * -포커스 들어 올때- focusin
     * -포커스 나갈때- focusout
     * 
     * 폼
     * -submit - 전성 버튼을 눌러서 서버로 데이터를 전송하는 상황일때
     * 
     * 이벤트가 발생하면 특정한 동작을 실행시켜 주는 메서드
     * -대상.addEventLisner('이벤트이름',함수)
     */
    const searchForm = document.getElementById('search_form');
    const searchKeyword = document.getElementById('search_word');


    // searchForm.addEventListener('submit',function(){}); // 함수선언
    // searchForm.addEventListener('submit',()=>{}); //익명함수
    // searchForm.addEventListener('submit',함수이름); // 만들어진 함수불러오기

    //람다식 - 배열 메서드(()=>{})
    //forEach : 갯수만큼 반복 - 원하는거 실행
    //map : 데이터를 가공해서, 새로운 배열 생성 -> 결과값 생성
    //filter : 조건에 맞는 것만 추출
    //sorted : 기준을 설정, 정렬
    searchForm.addEventListener('submit',()=>{ //콜백함수
        // input에 현재 입력된 값 가져오기
        searchKeyword = document.querySelector('#search_word').value;
        // 조건에 일치하는 데이터만 새로 생성
        const filter = data.filter((item)=>item[title].includes(searchKeyword));
            
    })