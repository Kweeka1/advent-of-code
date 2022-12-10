import fs from "fs";
const file = fs.readFileSync(`${process.cwd()}/Day\ 5/input.txt`, { encoding: "ascii" });
const lines = file.split("\r\n");
const splited = lines.findIndex(line => line === '');

const stacks = {}
const supplies = lines
  .slice(0, splited - 1)
  .map(line => line.replace(/\s{4}/g, "[*]").replace(/\s/g, ''))

const moves = lines.slice(splited + 1).map(move => move.match(/\d+/g))

for (let i = 0; i < supplies.length; i++) {
  for (let j = 0; j < supplies[i].length; j = j + 3) {
    const crate = supplies[i].slice(j, j + 3)
    if (crate !== "[*]") {
      if (stacks[(j / 3) + 1]) {
        stacks[(j / 3) + 1].push(crate)
      } else {
        stacks[(j / 3) + 1] = [crate]
      }
    }
  }
}

moves.forEach(move => {
  const crates = stacks[move[1]].splice(0, move[0]);
  stacks[move[2]] = [...crates,...stacks[move[2]]];
})

const result = Object.values(stacks).reduce((acc, next) => {
  return acc + next[0].replace(/(\[)|(\])/g, '')
}, '')

console.log(result);