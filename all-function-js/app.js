function addProduct(igoreBlocked = false) {
    // можно передать параметру зн. по умолчанию
    isProductAvailable()
    isBlocked()
    possibleToDelivery()
}

function isProductAvailable(){}

function isBlocked() {}

function possibleToDelivery() {}

function calculate() {
    const a = 5;
    const b = 6;

    const result = a + b;
    const reslut2 = b - a;
    return {one: result, two: reslut2};
    // return [res, res2];
}
// по дефолту функция возвращает undefined
const sum = calculate();
console.log(sum, 'sum');

const calculate2 = () => {
    const a = 5;
    const b = 6;

    const result = a + b;
    const reslut2 = b - a;
    return {one: result, two: reslut2};
}

const sum2 = calculate2();
console.log(sum2, 'sum2')

calculate();
calculate2();


function calc(a, b, Fn) {
    Fn();
    return a + b;
}

calc(1, 2, testFunctin);
// anonim fn
// ()=>{}
calc(1, 2, function(){
    console.log('go to consle 2')
});

function testFunctin(){
    console.log('go to cosole')
}




const data_from_server = [
    {id: 1, name: 'Alex', money: 10},
    {id: 22, name: 'Monika', money: 1000},
    {id: 567, name: 'Miliarderich', money: 666},
]
const alexStr = getUsersMoney({id: 1}, (user)=>{
    const str = `${user.name}, ${user.money} - столько денег`;
    console.log(str);
    return str;
});

getUsersMoney({id: 22}, (user)=>{
    console.log(`${user.name}, ${user.money} - столько денег`)
});
getUsersMoney({id: 567}, (user)=>{
    console.log(`${user.name}, ${user.money} - столько денег`)
});

function getUsersMoney(useeInfo, callback) {
    const id = useeInfo.id;
    const data = data_from_server;
    let result = null;

    if(id) {
        for(let i = 0; i < data.length; i++) {
            const user = data[i];

            if(user && user.id === id) {
                result = user;
            }
        }
        const str = callback(result);

        return str;
    }
}