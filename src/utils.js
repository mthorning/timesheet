function leadingZero(number) {
    return number < 10 ? `0${number}` : number;
}
export function minsToString(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}
