/*
        자료형 종류
        1. 원시값
        String : 문자
        Number : 숫자
        Boolean : 논리형, true/false
            ㄴ false 처리 : 0, false, null, '', undefined
            ㄴ 그외에는 true
                ㄴundefined : 변수 초기화X, 매개변수 값X
        2. 객체(Object)
        
        자료형 체크 : typeof(변수/값)
        */

        let y = 20;
        let z; // 기본값 undefined (값자체가 없음 null과는 다른개념)
        const MAX = 100;
        console.log(x, y, z, MAX);
        var x = 10;

        console.log(add(x, y));
        // 같다 비교
        console.log("5=='5' =>", 5 == '5');
        console.log("5 != '5' =>", 5 === '5');
        // 다르다 비교 0 값0 비교형0
        console.log("5==='5'", 5 === '5');
        console.log("5 !=='5'", 5 !== '5');
        console.log();

        //함수선언
        function add(x, y) {
            return x==y?"맞다":"아니다";
        }
        // property vs attribute 차이점 조사하기
        /*
            attribute 와 property 를 한국어로 번역하자면 둘다 '속성' 이라는 의미를 가지고 있다. 단순히 단어명이 같은 것을 떠나서 실제로 둘은 html 요소에 대한 클래스와 아이디와 같은 속성을 가리킨다

            어트리뷰트는 HTML의 속성이다. 엘리먼트에 아이디나 클래스와 같은 추가적인 정보를 일컫는다고 보면 된다


            프로퍼티는 DOM의(자바스크립트) 속성이다. 즉, html의 attribute를 DOM 내에서 대신해서 표현이라고 보면 된다.

            
            attribute는 정적으로 변하지 않고 property는 동적으로 그 값이 변할 수 있다는 의미를 내포하고 있다

            attribute와 property가 일치하는 경우도 있지만 그렇지 않은 경우도 있음
        */

        let result = document.getElementById('result');

        // innerHTML : 해당 요소 안에 태그 넣을수 있음
        // innerText : 해당 요소 안에 텍스트만 넣을수 있음
        result.innerHTML = add(3,4);
        console.log("result.innerHTML",result);
        result.innerText = add(3,4);
        console.log("result.innerText",result);

        let boxList = document.getElementsByClassName('box');
        console.log(boxList);
        /*
            문자열을 가져
        */
        // =저장한 텍스트만 화면에 뿌림
        boxList[0].innerText = '<p>내용1</p>'; 
        boxList[1].textContent = '<p>내용2</p>'; 
        
        // = 저장한 텍스트를 html문법에 맞게 화면에 뿌림
        boxList[2].innerHTML = '<p>내용3</p>'; 
        boxList[3].innerHTML = add(6,6);