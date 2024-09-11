const pathFile = process.argv[2];

if (!pathFile) process.exit(-1);

const fs = require("fs");

const objBufferedFile = fs.readFileSync(pathFile);

const str = objBufferedFile.toString();

// console.log(str.split("\n"));

const arrFile = str.split("\n");
console.log(arrFile.length - 1);
