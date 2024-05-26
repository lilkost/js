// callback hell
//
//
// function fetchUserInfo(callback) {
//     setTimeout(()=> {
//         const data = {
//             id: 1,
//             name: 'Alex',
//         }
//         callback(data);
//     },1000);
// }

// function fetchUserGames(id, callback) {
//     setTimeout(()=> {
//         const data = ['game1', 'game2', 'game3']
//         callback(data);
//     },1000);
// }

// function run() {
//     fetchUserInfo((userInfo)=>{
//         console.log(userInfo)

//         fetchUserGames(userInfo.id, (userGames)=>{
//             console.log(userGames)
//         })
//     });
// }

// run();

// Promise create
//
//
// function fetchUserData() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             const data = {id: 1, name: 'Lecha'}

//             resolve(data);
//         },1000)
//     });
// }

// function fetchUserGame(id){
//     return new Promise((resole, reject) => {
//         setTimeout(()=> {
//             const data = ['game1', 'game2', 'game3']
//             resole(data);
//         }, 1000);
//     })
// }

// function run() {
//     fetchUserData()
//         .then((userData)=> {
//             console.log(userData)
//             return fetchUserGame(userData.id)
//         })
//         .then((userGame)=> {
//             console.log(userGame)
//         })
//         .finally(()=> {
//             console.log('finally')
//         })

// }

// run();


// синхроный и асинхроный код 
// function fetchGames() {
    
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             const dataFromServer = [];
//             const gameFromServer = [
//                 {
//                     id: 1,
//                     name: 'game 1'
//                 },
//                 {
//                     id: 2,
//                     name: 'game 2'
//                 }
//             ];
//             if(Array.isArray(dataFromServer)) {
//                 resolve(gameFromServer);
//             }else {
//                 reject('Error');
//             }
//         },2000);
//     });
// }

// function renderLoading(){
//     const body = document.querySelector('body');

//     const loading = document.createElement('div');
//     loading.id = 'loading';
//     loading.textContent = 'Loading....';

//     body.append(loading);
// }
// function renderGames(games){
//     const body = document.querySelector('.game-list');
    
//     games.forEach((game)=> {
//         const gameEl = document.createElement('div');
//         gameEl.innerText = `Игра: ${game.name}`;
//         gameEl.className = 'game-el'
    
//         body.append(gameEl)
//     })
// }

// renderLoading();

// fetchGames()
//     .then((games)=>{
//         renderGames(games);
//     })
//     .catch((message)=> {
//         // renderErrorMessage()
//         console.log(message)
//     })
//     .finally(()=> {
//         const loading = document.querySelector('#loading');
//         loading.remove();
//     });




// методы promice

function fetchVideo() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const data = ['video 1', 'video 2']
            resolve(data);
            console.log('данные получены 1')
            reject('error 1')
        },1000)
    }) 
}
function fetchShorts() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const data = ['short 1', 'short 2']
            resolve(data);
            console.log('данные получены 2')
            reject('error 2')
        },2000)
    }) 
}
function main(){
    // Promise.all - хоть 1 ошибка сразу catch
    // Promise.allSettled - дожидается выполнения всех промисов
    // Promise.race - вернет 1 - й промис, даже если он упал с ошибкой
    // Promise.any - вернет 1 - й успешно выполнившийся промис
    Promise.all([
        fetchVideo(),
        fetchShorts()
    ])
    .then((data)=> {
        console.log(data)
    })
    .catch((message)=>{

    })
}
main();