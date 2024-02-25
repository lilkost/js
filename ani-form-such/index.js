function innerHtmlResult (result) {
    const parentElementHtml = document.querySelector('.parent');
    const createElementResult = document.createElement('div');
    
    createElementResult.innerHTML = result
    parentElementHtml.append(createElementResult)
}

const locale = navigator.locale

const formater = new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'kilometer-per-hour',
    unitDisplay: 'long' //short narrow
})

innerHtmlResult(formater.format(100))
innerHtmlResult(formater.format(101))
innerHtmlResult(formater.format(102))
innerHtmlResult(formater.format(103))
