import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 3/input.txt`, { encoding: "ascii" })
const lines = file.split("\r\n");
let score = 0

for (let index = 0; index < lines.length; index += 3) {
  getScore(lines.slice(index, index + 3))
}

function getScore(lines) {
  lines[0].split("").find(char => {
    return lines[1].split("").find(char2 => {
      if (char === char2) {
        return lines[2].split("").find(char3 => {
          if (char2 === char3) {
            const itemAsciiCode = Number(char3.charCodeAt(0))
            if (itemAsciiCode > 90) score += Math.abs((121 - itemAsciiCode) - (26 - 1))
            else score += Math.abs((89 - itemAsciiCode) - (52 - 1))
            return true;
          }
        })
      }
    })
  })
}

console.log(score);