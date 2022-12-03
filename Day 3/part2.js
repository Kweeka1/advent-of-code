import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 3/input.txt`, { encoding: "ascii" })
const lines = file.split("\r\n");
let score = 0

for (let index = 0; index < lines.length; index += 3) {
  const group = lines.slice(index, index + 3)
  getScore(group, group.length - 1)
}

function getSameChar(lastChar, lines, current, baseCase) {
  return lines[current].split("").find(char => {
    if (lastChar === char && current === baseCase) {
      const itemAsciiCode = char.charCodeAt(0)
      if (itemAsciiCode > 90) score += itemAsciiCode + 26 - 122
      else score += itemAsciiCode + 52 - 90
      return true;
    } 
    else if (lastChar === char) {
      return getSameChar(char, lines, current + 1, baseCase)
    }
  })
}

function getScore(lines, baseCase, current = 0) {
  lines[current].split("").find(char => {
    return getSameChar(char, lines, current + 1, baseCase)
  })
}

console.log(score);