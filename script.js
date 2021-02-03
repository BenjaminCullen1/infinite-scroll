

const apiKey = 'Qgwr0WvK02kXTq6cQLktlNL57kQjzKNYtHLTUvArC8I';
const count = 10;

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
}

getPhotos();