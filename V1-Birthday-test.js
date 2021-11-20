var candles = [4, 4, 5, 1, 3, 4]
let count = 0;
let max = 0;
for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
        max = candles[i]

    }
}
for (let j = 0; j < candles.length; j++) {
    if (candles[j] == max) {
        count++;

    }
}
console.log(count)