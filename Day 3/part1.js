import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 3/input.txt`, { encoding: "ascii" })
const lines = file.split("\r\n");
let score = 0

lines.forEach(line => {
  getScore(line)
})


function getScore(line) {
  const compartments = [line.slice(0, line.length / 2), line.slice(line.length / 2)]
  const chars = compartments[0].split("")

  for (let index = 0; index < chars.length; index++) {
    if (compartments[1].includes(chars[index])) {
      const itemAsciiCode = Number(chars[index].charCodeAt(0))
      if (itemAsciiCode > 90) score += Math.abs((121 - itemAsciiCode) - (26 - 1))
      else score += Math.abs((89 - itemAsciiCode) - (52 - 1))
      break;
    }
  }
}

console.log(score);