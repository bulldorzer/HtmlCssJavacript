/* 데이터 가져오기 내보내기 export, import */
import data from './board.js'
// console.log("board.js",data);
const searchForm = document.getElementById('search_form');
const board = document.querySelector(".board_list_wrap tbody");

// 초기화 - 함수 - 초기화 용도로 쓰는 함수
(
    function init   (data){
        renderinData(data);
    }
)(data);


function renderinData(data){

    board.innerHTML='';
    data.forEach((el)=>{

        const{id:no,title,writer,viewCount,regidate}=el;

        // html 안에 추가
        // const board = document.querySelector(".board_list_wrap tbody");

        // 자바스크립트로 태그 생성 추가하기
        // tr 태그생성
        const row = document.createElement('tr');
        // 넘버, 제목, 작성자, 조회수, 작성일
        const numberCell = document.createElement('td');
        const titleCell = document.createElement('td');
        const writerCell = document.createElement('td');
        const viewCounterCell = document.createElement('td');
        const regiDateCell = document.createElement('td');


        // 내용 설정
        // innerHTML, innerText, textContent
        numberCell.textContent = no;
        titleCell.textContent = title;
        writerCell.textContent = writer;
        viewCounterCell.textContent = viewCount;
        //  2023-11-22T10:30:00Z regidate원본데이터를 T기준으로 문자열을 배열로 분리하여
        //  가공되는데 해당 필요한 내용은 ['2023-11-22', '10:30:00Z'] 인덱스 0번째 
        //  데이터이므로 0번쨰 데이터를 지칭하여 가져온다
        
        regiDateCell.textContent = regidate.split("T")[0]; 
        // console.log(regidate.split("T"));

        // 기타 옵션 작업
        if (viewCount>=100) {
            row.classList.add("hot"); // 클래스추가
        }

        // tr 안에 td추가
        row.appendChild(numberCell);
        row.appendChild(titleCell);
        row.appendChild(writerCell);
        row.appendChild(viewCounterCell);
        row.appendChild(regiDateCell);

        // tbody안에 tr td 추가
        board.appendChild(row);
    })

}
    // 검색하는 영역에 폼태그 있음
    // id를 이용하여 요소를 가져오고 searchForm변수에 담으시오
    // form태그 가져오기 검색어 입력칸 가져오기 searchKeyword

    /**
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
    
 
    

    // searchForm.addEventListener('submit',function(){}); // 함수선언
    // searchForm.addEventListener('submit',()=>{}); //익명함수
    // searchForm.addEventListener('submit',함수이름); // 만들어진 함수불러오기

    //람다식 - 배열 메서드(()=>{})
    //forEach : 갯수만큼 반복 - 원하는거 실행
    //map : 데이터를 가공해서, 새로운 배열 생성 -> 결과값 생성
    //filter : 조건에 맞는 것만 추출
    //sorted : 기준을 설정, 정렬
    searchForm.addEventListener('submit',(e)=>{ //콜백함수
        // input에 현재 입력된 값 가져오기\
        e.preventDefault(); // 해당 이벤트의 기본 기능을 막겠다.
        const searchWord = document.getElementById('search_word').value;
        // console.log(searchWord);
        // 조건에 일치하는 데이터만 새로 생성
        const filter = data.filter((item)=>item.title.includes(searchWord));
        
        renderinData(filter);
    });
