import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 4/input.txt`, { encoding: "ascii" });
const lines = file.split("\r\n");
let score = 0;

lines.forEach(line => {
  const row = line.match(/\d+/g).map(num => Number(num));
  if ((row[1] >= row[2]) && (row[0] <= row[3])) {
    score++
  }
});

console.log(score);