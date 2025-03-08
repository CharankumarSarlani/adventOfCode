const add = (x, y) => x + y;
const mul = (x, y) => x * y;

const readText = (filePath) => Deno.readTextFileSync(filePath);

function runIntcodeProgram(program) {
  let position = 0;
  const operations = {
    1: add,
    2: mul,
  };

  while (true) {
    const opcode = program[position];
    if (opcode === 99) break;

    const param1 = program[program[position + 1]];
    const param2 = program[program[position + 2]];
    const outputPos = program[position + 3];
    program[outputPos] = operations[opcode](param1, param2);
    position += 4;
  }

  return program;
}

const main = () => {
  const program = readText("day_2/input.txt").split(",").map(Number);
  const P1 = [...program];
  P1[1] = 12;
  P1[2] = 2;

  const part1 = runIntcodeProgram(P1)[0];

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const testProgram = [...program];
      testProgram[1] = noun;
      testProgram[2] = verb;

      const result = runIntcodeProgram(testProgram);
      if (result[0] === 19690720) {
        return { part1, part2: 100 * noun + verb };
      }
    }
  }
};

console.log(main());
