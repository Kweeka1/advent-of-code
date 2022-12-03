import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 3/input.txt`, { encoding: "ascii" })
const lines = file.split("\r\n");
let score = 0

for (let index = 0; index < lines.length; index += 3) {
  getScore(lines.slice(index, index + 3), 0, 2)
}

function GetSameChar(lastChar, lines, current, baseCase) {
  return lines[current].split("").find(char => {
    if (lastChar === char && current === baseCase) {
      const itemAsciiCode = char.charCodeAt(0)
      if (itemAsciiCode > 90) score += Math.abs((121 - itemAsciiCode) - (26 - 1))
      else score += Math.abs((89 - itemAsciiCode) - (52 - 1))
      return true;
    } 
    else if (lastChar === char) {
      return GetSameChar(char, lines, current + 1, baseCase)
    }
  })
}

function getScore(lines, current, baseCase) {
  lines[current].split("").find(char => {
    return GetSameChar(char, lines, current + 1, baseCase)
  })
}

console.log(score);