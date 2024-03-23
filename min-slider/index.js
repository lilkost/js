const API = {
    URL: 'https://api.unsplash.com',
    GET: '/photos/random',
    SECREET_ID: 'sSKBIz96vFFZJrce2DmKywAtl_9vJQcfBxsmrikcEK0',
    COUNT: 5,
}

const slider = document.getElementById('slider');
let state = [];
let currentItem;

const fetchPhotos = async () => {
    try{
        const responce = await fetch(`${API.URL}${API.GET}?client_id=${API.SECREET_ID}&count=${API.COUNT}`);
        if(!responce.ok) throw new Error('error api');

        const data = await responce.json();
        if(data.length !== 0) {
            state = data;
            currentItem = data[0].id;
            setPhotos(state);
        }
    } catch(err){
        console.warn(err)
    }
}


const renderItems = () => {
    return state.map(({urls: {regular}, user: {name}, id}) => {
        const isActive = currentItem === id ? 'active' : '';
        return `
            <div class="slide ${isActive}" data-id="${id}" style="background-image: url(${regular})">
                <p class="slide-name">
                    ${name}
                </p>
            </div>
        `;
      }).join("");
}

const handleClick = ({currentTarget}) => {
    const slides = document.querySelectorAll('.slide');
    
    const {id} = currentTarget.dataset;
    

    if(id === currentItem) return;
    slides.forEach(slide => slide.classList.remove('active'));

    currentTarget.classList.add('active');

    currentItem = id;
}

const setPhotos = (state) => {
    slider.innerHTML = renderItems();
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide=> {
        slide.addEventListener('click', handleClick);
    });
}

fetchPhotos();