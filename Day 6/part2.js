import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 6/input.txt`, { encoding: "ascii" });
const line = file.split("");

function findStartOfMessageMarker(line) {
  let seq = ""

  for (let idx = 0; idx < line.length; idx++) {
    const char = line[idx]

    if (seq.includes(char)) {
      seq = seq.substring(seq.indexOf(char) + 1) + char
    } else {
      seq += char
    }

    if (seq.length == 14) return idx + 1
  };
}

console.log(findStartOfMessageMarker(line));