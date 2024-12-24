async function updatePost(postId,title,body){
    try {
        const requestUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const requestOption = {
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            // body : JSON.stringify({
            //     title : title,
            //     body : body,
            //     userId : userId
            // })
            body : JSON.stringify({ title, body })
        }
        const res = await fetch(requestUrl,requestOption);
        const data = await res.json(); // data가 1개만 옴 - 객체임
        console.log('update data : ',data);
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('updateForm').addEventListener('submit', (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const postId = document.getElementById('postId').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (postId) {
      updatePost(postId, title, content);
    } else {
      const result = document.getElementById('result');
      result.textContent = 'Please enter a valid Post ID.';
    }
  });