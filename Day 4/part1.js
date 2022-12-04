import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 4/input.txt`, { encoding: "ascii" });
const lines = file.split("\r\n");
let score = 0;

lines.forEach(line => {
  const match = line.match(/\d+/g);
  const row = match.map(num => Number(num)).sort((a, b) => a - b); 
  for (let index = 0; index < match.length; index += 2) {
    if (Number(match[index]) === row.at(0) && Number(match[index + 1]) === row.at(-1)) {
      score++
      break;
    }
  }
});

console.log(score);