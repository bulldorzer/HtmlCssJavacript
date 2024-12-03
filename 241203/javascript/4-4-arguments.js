//arguments

function printArgs(a,b,c) {
    // console.log(a, b, c);
    console.log(arguments); // 배열로 저장되어 있음 인수들의 값들이

    // 변수 함수 이름을 arguments로 작명하면 안된다
    for (const arg of arguments) { 
        console.log(arg);
    }
    console.log(`-----------------------`);
}

// 정상
printArgs('john','alice','adrew'); 

// 인수가 부족하면 undefined 표시
printArgs('Captin'); 
printArgs('jayden','army');

// 아구먼트의 갯수를 넘어서면 무시
printArgs('john','alice','adrew','cccc'); 

// 줄인말 만들기
function firstWord(word1,word2,word3) {
    console.log(arguments);
    let result="";
    for (const word of arguments) {
        // console.log(word.charAt(0));
        result  +=  word.charAt(0);
    }
    result += "|";
    for (const word of arguments) {
        // console.log(word.charAt(0));
        result  +=  word[0];
    }
    return console.log(result);
    // let result="";
    // let word = arguments.map((el,i)=>{
    //     result += el.charAt(0);
    //     return result;
    // });
}
//얼죽아로 줄임말
firstWord('얼어','죽어도','아이스아메리카노');
//분좋카
firstWord('분위기','좋은','카페');

// Rest parameter
function printRank(first, second,...other){ // ...other는 뒤에 나머지 인자값들을 배열로 저장함
    console.log("레이스 최종 결과");
    console.log(`${first}`);
    console.log(`${second}`);
    for (const arg of other) {
        console.log(`${arg}`);
    }
}
printRank('phil','won','emma','min','luke');