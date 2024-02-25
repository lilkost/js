// image
// const imagesObserver = new IntersectionObserver(
//     (entries, observer) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {
//                 entry.target.src = entry.target.dataset.src

//                 observer.unobserve(entry.target)
//             }
//         });
//     },
//     {
//         rootMargin: '50px 0px 0px'
//     }
// );

// document.querySelectorAll('img').forEach(image => imagesObserver.observe(image))

// video
// const videoObserver = new IntersectionObserver(
//     ([entry]) => {
//         const video = entry.target;

//         if(video.currentTime === 0) return;

//         if(!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
//             video.pause();
//         }
//         else {
//             video.play();
//         }
//     },
//     {
//         threshold: [0.2, 0.8]
//     }
// );

// document.querySelectorAll('video').forEach(video => videoObserver.observe((video)))


// link

// const section = document.querySelectorAll('.section');
// const links = document.querySelectorAll('.menu__item');

// const cb = (entries) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting && entry.intersectionRatio > 0.2) {
//             links.forEach(link=> {
//                 link.classList.remove('active');
//             })

//             const activeId = entry.target.id;
//             const activeLink = document.querySelector(`.menu__item[href="#${activeId}"]`);

//             if(activeLink) {
//                 activeLink.classList.add('active');
//             }
//         }
//     });
// }

// const sectionObserver = new IntersectionObserver(cb, {threshold: [0.1, 0.9]});

// section.forEach(sec => sectionObserver.observe(sec))


// any scroll
let nextPage = 2;
const infinityObserver = new IntersectionObserver(
    ([entry], observer) => {
        if(entry.isIntersecting) {
            observer.unobserve(entry.target);

            loadPost(nextPage++)
        }
    },
    {
        threshold: 1
    }
);

const loadPost = (page = 1) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
        .then(res => res.json())
        .then(posts => {
            posts.forEach(post=> {
                const card = document.createElement('div')
                card.innerHTML = `
                    <h3>${post.id}: ${post.title}</h3>
                    <p>${post.body}</p>
                `;
                card.className = 'card';
                document.body.append(card);
            })
            // observer logic
            const lastCard = document.querySelectorAll('.card:last-child');

            if(lastCard) {
                infinityObserver.observe(lastCard[0])
            }
        })
        .catch(console.error)
}

loadPost();