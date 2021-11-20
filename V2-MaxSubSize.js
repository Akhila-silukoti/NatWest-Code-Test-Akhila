function maxSubSetSize(input) {
    var temp = input.split('\n');
    var nk = temp[0].split(' ').map(Number),
        n = nk[0];
    k = nk[1];
    var S = temp[1].split(' ').map(Number);
    var count = Array(k).fill(0);
    for (var i = 0; i < n; i += 1) {
        count[S[i] % k] += 1;
    }
    let size = 0;

    for (var i = 0; i < Math.floor(k / 2) + 1; i += 1) {
        if (i == 0 || k == i * 2) {
            size += (count[i] != 0) ? 1 : 0;
        } else {
            size += Math.max(count[i], count[k - i]);
        }
    }

    console.log("Max size of the subset with given condition is", size);
}
maxSubSetSize("7 4 \n 19 10 12 10 24 25 22")
