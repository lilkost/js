const sum1 = 120323;
const sum2 = 31231;
const sum3 = 123312.33;

document.querySelector('.num1').innerHTML = sum1.toLocaleString('ru',{})
document.querySelector('.num2').innerHTML = sum2.toLocaleString('ru',{
    style: "currency",
    currency: "rub",
    currencyDisplay: "code",
    useGrouping: true, // false,
    minimumFractionDigits: 0
})

let intel = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "rub",
    currencyDisplay: "code",
    useGrouping: true, // false,
    minimumFractionDigits: 0
})

document.querySelector('.num3').innerHTML = intel.format(sum3);