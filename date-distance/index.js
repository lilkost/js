const rtf = new Intl.RelativeTimeFormat('ru', {
    numeric: 'always', // auto
    style: 'long', // narrow short
    localeMatcher: "lookup" //best fit
})

// console.log(rtf.format(-1, 'minute'))
// console.log(rtf.format(1, 'day'))
// console.log(rtf.format(2, 'day'))
// console.log(rtf.format(-2, 'day'))
// console.log(rtf.format(-10, 'day'))

function getRelativeTimeString(date, lang = navigator.language){
    const timeMs = typeof date === 'number' ? date : date.getTime();

    const deltaSecond = Math.round((timeMs - Date.now()) / 1000);

    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];

    const units  = ['second', 'minute', 'hour', 'day', 'week', 'mount', 'year']

    const unitIndex = cutoffs.findIndex(cutoff =>cutoff > Math.abs(deltaSecond))

    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1

    const rtf = new Intl.RelativeTimeFormat(lang, {numeric: "auto"});

    return rtf.format(Math.floor(deltaSecond / divisor), units[unitIndex]);
}

console.log(getRelativeTimeString(new Date('2024-01-28T13:38:04'), 'ru'))