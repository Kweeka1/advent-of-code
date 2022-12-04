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
      const itemAsciiCode = chars[index].charCodeAt(0)
      if (itemAsciiCode > 90) score += itemAsciiCode + 26 - 122
      else score += itemAsciiCode + 52 - 90
      break;
    }
  }
}

console.log(score);
