process.stdin.setEncoding('utf-8')

const reader = require('readline').createInterface({
    input: process.stdin,
});
let count = 0;

reader.on('line', (line) => {
    if (line.startsWith("# [") || line.startsWith("## [")) {
        count++;
    }
    if (count >= 2) {
        process.exit(0);
    }
    console.log(line);
});
