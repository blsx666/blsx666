console.log("Hello World");
const fs = require('node:fs');
// import fs from 'node:fs';
fs.stat('readme.md', (err, stats) => {
    if (err) {
        console.error(err);
    }
    console.log(stats.isFile()); // true
    console.log(stats.isDirectory()); // false
    console.log(stats.isSymbolicLink()); // false
    console.log(stats.size); // 1024000 //= 1MB
});

var content = "Hello GYP";
fs.writeFile("test.txt", content, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("saved successfully.");
    }
});