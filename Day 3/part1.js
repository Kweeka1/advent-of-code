const fs = require("fs");
const file = fs.readFileSync("./input.txt", { encoding: "ascii" })
const l = file.split("\r\n");
let score = 0

l.forEach(line => {
  getScore(line)
})


function getScore(line = "") {
  const compartments = [line.slice(0, line.length / 2), line.slice(line.length / 2)]
  const chars = compartments[0].split("")

  for (let index = 0; index < chars.length; index++) {
    if (compartments[1].includes(chars[index])) {
      itemScore = Number(chars[index].charCodeAt(0))
      if (itemScore > 90) {
        score += Math.abs((121 - itemScore) - (26 - 1))
      } else {
        score += Math.abs((89 - itemScore) - (52 - 1))
      }
      break;
    }
  }
}

console.log(score);