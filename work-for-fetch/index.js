//  https://dog.ceo/api/breeds/image/random
// https://jsonplaceholder.typicode.com/
// https://cat-fact.herokuapp.com/


const API = {
    URL_1: 'https://jsonplaceholder.typicode.com/', 
    URL_2: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m',
    URL_3: 'https://api.open-meteo.com/v1/forecast?latitude=56.326797&longitude=44.006516&current=temperature_2m,is_day,wind_speed_10m'
};

// POST
// const testPosts = {
//     "userId": 1,
//     "id": 666,
//     "title": "new posts title",
//     "body": "new posts body"
// }
// fetch(`${API.URL_1}posts`, {
//     method: 'POST',
//     body: JSON.stringify(testPosts)
// })
// .then((data)=>{
//     if(data.status === 200 && data.ok) {
//         return data.json();
//     }
//     else {
//         console.error('Error: bad request');
//     }
// })
// .then((info)=> {
//     console.log(info);
// })

// GET
// fetch(`${API.URL_1}posts`, {
//     method: 'GET',
// })
// .then((data)=>{
//     if(data.status === 200 && data.ok) {
//         return data.json();
//     }
//     else {
//         console.error('Error: bad request');
//     }
// })
// .then((info)=> {
//     console.log(info);
// })

// DELETE
// fetch(`${API.URL_1}posts/1`, {
//     method: 'DELETE',
// })
// .then((data)=>{
//     if(data.status === 200 && data.ok) {
//         return data.json();
//     }
//     else {
//         console.error('Error: bad request');
//     }
// })
// .then((info)=> {
//     console.log(info);
// })

// PUT
// fetch(`${API.URL_1}posts/1`, {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bat',
//         userId: 666
//     })
// })
// .then((data)=>{
//     if(data.status === 200 && data.ok) {
//         return data.json();
//     }
//     else {
//         console.error('Error: bad request');
//     }
// })
// .then((info)=> {
//     console.log(info);
// })

// api feather
// fetch(API.URL_3, {
//     method: 'GET'
// })
// .then(data=> {
//     if(data.status === '200' || data.ok) {
//         return data.json();
//     }else {
//         console.error('Error: Bad request');
//         return false;
//     }
// })
// .then(info=> {
//     renderWeather(info.current);
//     console.log(info)
// })

function renderWeather(data) {
    const div = document.createElement('div');
    div.textContent = `
        Тек. темп. - ${data.temperature_2m}
        Скорость верта - ${data.wind_speed_10m}
        Cейчас ${data.is_day === 1 ? 'день' : 'ночь'}    
    `;

    document.querySelector('.render').append(div);
}


// AXIOS
// axios.get(API.URL_3)
// .then(res=> {
//     console.log(res.data);
// })


// XmlHTTPRequst
let xhr = new XMLHttpRequest();

xhr.open('GET', `${API.URL_1}posts`);

xhr.send();

xhr.onload = function() {
    if(xhr.status !== 200) {
        console.error('Error: bad request');
    }else {
        console.log(xhr.response);
    }
}