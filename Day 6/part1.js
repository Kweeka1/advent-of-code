import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 6/input.txt`, { encoding: "ascii" });
const line = file.split("");

function findStartOfPacketMarker(lines) {
  let seq = ""

  for (let idx = 0; idx < lines.length; idx++) {
    const char = lines[idx]

    if (seq.includes(char)) {
      seq = seq.substring(seq.indexOf(char) + 1) + char
    } else {
      seq += char
    }

    if (seq.length == 4) return idx + 1
  };
}

console.log(findStartOfPacketMarker(line));