function commentUser(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

commentUser();

function displayUsers(data){
    const sectionId = document.getElementById('comments');
    for(const comments of data){
        const div = document.createElement('div');
        div.classList.add("comments")
        div.innerHTML =`
        <h2>${comments.postId}</h2>
        <h5>${comments.id}</h5>
        <h5>${comments.name}</h5>
        <h5>${comments.email}</h5>
        <h4>${comments.body}</h4>
        `;

    sectionId.appendChild(div);
    console.log(comments);
    }

}