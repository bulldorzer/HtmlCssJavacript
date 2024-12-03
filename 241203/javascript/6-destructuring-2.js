// destructuring = 구조 분해2



const macBook = {
    title: "맥북 프로 16형",
    price: 300,
    memory: '16g',
    Storage: '1TB'
}

function printSummery(obj) {
    // 객체명을 안붙이고 사용
    const { title, price, memory, Storage } = obj;

    console.log(title);
    console.log(price * (1 - 0.1));
}
// 인수떄부터 객체의 프로퍼티를 뽑아냄
function printInfo({ title, price, memory, Storage }) {
    console.log(title);
    console.log(price * (1 - 0.1));
}

printSummery(macBook);
printInfo(macBook);

const btn = document.getElementById('btn');
console.log(btn);

// 클릭 동작할때  실행해줘
// 매개 변수에 이벤트 발생한 것에 대한 정보를 담고
// e.target - 이벤트가 발생한 요소를 가리킴

// 요소를 매개변수에 담아 프로퍼티에 접근
// btn.addEventListener('click',(el)=>{
//     console.log(el);
//     console.log(el.target);
// });

// target 프로퍼티만 추출해서, 프로퍼티 이름으로 실행
btn.addEventListener('click',({target})=>{
    console.log({target});
});

// 매개변수에 {}붙는것은 - 프로퍼티 추출
// {} 유무 여부를 잘 체크해라.