async function deletePost(postId){
    try {
        const requestUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const requestOption = {
            method : 'Delete',
            
        }
        const res = await fetch(requestUrl,requestOption);
        if (res.ok) {
          console.log(`Deleted Post ID: ${postId} ,Status: ${res.status}`);
        } else {
          console.log(`Failed to delete Post ID: ${postId} ,Status: ${res.status}`);
        }
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('deleteForm').addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 폼 제출 동작 방지

  const postId = document.getElementById('postId').value;

  deletePost(postId);
});

  