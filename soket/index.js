const websoket = new WebSocket(`wss://socketsbay.com/wss/v2/1/demo/`); // 1 params link, 

websoket.onopen = function () {
    console.log('Websoket')
};

const addMessage = (text, color) => {
    const p = document.createElement('p');
    p.innerText = text;
    p.style.color = color;

    app.appendChild(p);
}

const app = document.getElementById('app');
const input = document.querySelector('.input');
const submit = document.querySelector('.submit');

websoket.onmessage = function ({ type, data }) {
    console.log(type, data)

    if (type === 'message') addMessage(data, 'red');
}

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const inputValue = input.value;
    addMessage(inputValue, 'green');

    websoket.send(inputValue);
});