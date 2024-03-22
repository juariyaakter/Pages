function albumUsers(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data =>displayUsers(data))
}

albumUsers();

function displayUsers(data){
    const sectionId = document.getElementById('album');
    for(const album of data){
    const div = document.createElement('div');
    div.classList.add("album")
        div.innerHTML =`
        <h2>${album.userId}</h2>
        <h3>${album.id}</h3>
        <h3>${album.title}</h3>
        
        `;

    sectionId.appendChild(div);
    console.log(album);
} 
}