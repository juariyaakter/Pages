function photosUsers(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>displayUsers(data))
}

photosUsers();

function displayUsers(data){
    const sectionId = document.getElementById('photos');
    for(const photos of data){
    const div = document.createElement('div');
    div.classList.add("users")
        div.innerHTML =`
        <h2>${photos.albumId}</h2>
        <h3>${photos.id}</h3>
        <h3>${photos.title}</h3>
        <a>${photos.url}</a>
        <a>${photos.thumbnailUrl}</a>
        
        `;

    sectionId.appendChild(div);
    console.log(photos);
} 
}