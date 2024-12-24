const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const list = document.getElementById("list");

btn1.addEventListener('click', ()=>{
    getPosts();
    clearList();
});
btn2.addEventListener('click', ()=>{
    const id = document.getElementById('numId').value;
    if (id) {
        clearList();
        getPostsById(id);
    } else {
        alert('게시물 번호 입력해주세요.');
    }
});


function clearList(){
    list.innerHTML = '';
}

function createListItem(data) {
    const li = document.createElement('li');
    li.textContent = `author : ${data.id} / title : ${data.title}`;
    list.appendChild(li);
}

async function getPosts(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        data.map(el=>{
            createListItem(el);
        });
    } catch (error) {
        console.error('Error fetching data',error);
    }
}


async function getPostsById(id){
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json(); // data가 1개만 옴 - 객체임
        createListItem(data);
        
        
    } catch (error) {
        console.error('Error fetching data',error);
    }
}

// ----------------------------------------------------------------
const postForm = document.getElementById('postForm');

// submit 버튼 클릭하는 순간 - 폼에는 submit 이벤트가 발생한다
// submit 이벤트 = 새로고침 / 페이지 이동
postForm.addEventListener('submit', (evt)=>{ 
    
    evt.preventDefault(); // 기본설정 막음

    const title = document.getElementById('title');
    const body = document.getElementById('content');
    
    createPost(title,body);

})

// userId = 1 -> 생략할 경우 기본값이 1이다
async function createPost(title,body,userId=1){
    try {
        const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
        const requestOption = {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            // body : JSON.stringify({
            //     title : title,
            //     body : body,
            //     userId : userId
            // })
            body : JSON.stringify({ title, body, userId })
        }
        const res = await fetch(requestUrl,requestOption);
        const data = await res.json(); // data가 1개만 옴 - 객체임
        console.log('Created data : ',data);
    } catch (error) {
        console.log(error);
    }
    
}