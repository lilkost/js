// this = window (в браузере)
// глобальный контекст
console.log(this);
// в node this - экспорты текущего модуля
// exports.default = {
//     title: "Phone"
// }
// console.log(this);

// контекст внутри функции 

// в браузере window
// function myFn() {
//     console.log(this)
// }
// myFn()
// в node object global
// function myFn1(){
//     function myFn() {
//         console.log(this)
//     }
//     myFn()
// }
// myFn1()
// при включеном use strict в браузере будет undefined и в node

// в браузере будет ссылатся на сам объект
const item = {
    title: 'Phone',
    fullPrice: 100,
    calculatePrice(discountPercent = 0){
        console.log(this.fullPrice - discountPercent / 100 * this.fullPrice)
    }
}

item.calculatePrice(33)

// вызов функции с превязкой к кнотексту call apply - после привязки 2 аргуметом можно передать необходимые параметры для функции
// разница между call и aply
// call(obj, a,b,c....) - сколько угодно значений
// apply (obj, [a,b,c]) - массив значений
function calcDiscount(age) {
    if(age > 65) {
        console.log(this.price / 2);
    }
    else {
        console.log(this.price);
    }
}
const item2 = {title: "phone", price: 10000};
calcDiscount.call(item2, 6);

// bind - привязывает функцию к контексту, но как apply и call не вызывает функцию мгновенно
// const calcDiscountOldPeople = calcDiscount.bind(item2, 70);
// calcDiscountOldPeople()

// вызов функции как конструктора
// будет ссылатся на созданый внутри объект
function CreateItem(title, price) {
    this.title = title;
    this.price = price;
    // console.log(this);
}

const itm3 = new CreateItem('title 1', 123);
const itm2 = new CreateItem('title 2', 2223);

console.log(itm3, itm2)




/// ()=> //
console.log('()=>');
// у стрелочных функций нету своего this и она берет его у внешней функции, если такой нету то ведет себя как-будто создана в глобальном контексте: window - браузер, node - {}

const obj = {
    getThis1: function () {
        console.log(this)
    },
    getThis2: ()=> {
        console.log(this)
    }
}

obj.getThis1();
obj.getThis2()

const obj2 = {
    lasName: 'Ivanov',
    firstNames: ['Petr', 'Ivan'],

    logFullName1: function() {
        this.firstNames.forEach(function(name){
            console.log(`${name} ${this.lasName}`)
        })
    },
    logFullName2: function() {
        this.firstNames.forEach(function(name){
            console.log(`${name} ${this.lasName}`)
        },this)
    },
    // в forEach 2-м аргументом можно передать контекст вызова
    logFullName3: function() { // с нее
        this.firstNames.forEach(name=> {
            console.log(`${name} ${this.lasName}`) // для стрелочной функции будет this с родительской функции logFullName2, и this будет сам объект
        })
    }
}

obj2.logFullName1();
obj2.logFullName2();
obj2.logFullName3();


const item3 = {
    title: "Phone", 
    logTitle: function() {
        setTimeout(function() {
            console.log(`product - ${this.title}`, this)
        })
    },
    logTitle2: function() {
        setTimeout(()=> {
            console.log(`product - ${this.title}`, this)
        })
        // стрелочная функция не имеет своего контекста и берет его у выше стоящей функции logTitle2
    },
    logTitle3: function() {
        setTimeout((function() {
            console.log(`product - ${this.title}`, this)
        }).bind(this)) // обернуть функцию в функциональное выражение () и через bind привезать ее к контексту объекта в котором она вызывается
    },
    // setTimeOutn - вызывает функцию в глобальном контексте и ссылается на него, а не на то место где она была определена
}

item3.logTitle();
item3.logTitle2();
item3.logTitle3();


// так-как у стрелочных функций нет своего this их нельзя использовать как конструкторы

const CreateItem2 = (title, price) =>{
    this.title = title;
    this.price = price;

    console.log(this)
    return this
}

new CreateItem2('title', 100)
