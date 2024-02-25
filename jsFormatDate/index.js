function innerHtmlResult(htmlClass, d) {
    document.querySelector(`${htmlClass}`).innerHTML = d;
}

const local = navigator.language;

const now = new Date();

const dateOption = {
    day: "numeric",//2-digit
    month: "long", // numeric 2-digit narrow short long
    year: "2-digit", //2-digit
    // era: "long",
    weekday: "long", // short narrow long,
    // timeZoneName: 'short',
    hour: 'numeric',
    // hour12: false,
    minute: 'numeric',
    // second: 'numeric'
}

const UserData = new Intl.DateTimeFormat(local, dateOption)
const RuDate = new Intl.DateTimeFormat('ru', dateOption);
const UsDate = new Intl.DateTimeFormat('en-US', dateOption);
const UkDate = new Intl.DateTimeFormat('en-UK', dateOption);

innerHtmlResult('.du', UserData.format(now));
innerHtmlResult('.d1', RuDate.format(now));
innerHtmlResult('.d2', UsDate.format(now));
innerHtmlResult('.d3', UkDate.format(now));