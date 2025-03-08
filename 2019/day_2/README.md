# Day 2: 1202 Program Alarm

## Problem Overview

On the way to your gravity assist around the Moon, your ship computer beeps angrily about a "1202 program alarm". On the radio, an Elf is already explaining how to handle the situation: "Don't worry, that's perfectly norma--" The ship computer bursts into flames.

You notify the Elves that the computer's magic smoke seems to have escaped. "That computer ran Intcode programs like the gravity assist program it was working on; surely there are enough spare parts up there to build a new Intcode computer!"

An **Intcode program** is a list of integers separated by commas (like `1,0,0,3,99`). To run one, start by looking at the first integer (called position 0). Here, you will find an **opcode** - either 1, 2, or 99. The opcode indicates what to do; for example, 99 means that the program is finished and should immediately halt. Encountering an unknown opcode means something went wrong.

### Opcodes:

- **Opcode 1** adds together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored.
- **Opcode 2** works exactly like opcode 1, except it multiplies the two inputs instead of adding them. Again, the three integers after the opcode indicate where the inputs and outputs are, not their values.

Once you're done processing an opcode, move to the next one by stepping forward 4 positions.

---

### Example Program

Here is an example of a program:

1,9,10,3,2,3,11,0,99,30,40,50

1. The first four integers, `1,9,10,3`, are at positions `0, 1, 2, and 3`. These represent the first opcode (1, addition), the positions of the two inputs (`9` and `10`), and the position of the output (`3`).

   - To handle this opcode, you first need to get the values at the input positions: position `9` contains `30`, and position `10` contains `40`.
   - Add these numbers together to get `70`, and store this value at the output position `3`.
   - The program now looks like this: `1,9,10,70, 2,3,11,0, 99, 30,40,50`.

2. The next opcode is `2`. This opcode multiplies the two inputs at positions `3` and `11` (values `70` and `50`), resulting in `3500`, which is stored at position `0`. After processing, the program looks like this:
   ```
   3500,9,10,70,
   2,3,11,0,
   99,
   30,40,50
   ```
3. Finally, the program halts when it reaches opcode `99`.

---

### Additional Examples

1. `1,0,0,0,99` becomes `2,0,0,0,99` (1 + 1 = 2).
2. `2,3,0,3,99` becomes `2,3,0,6,99` (3 \* 2 = 6).
3. `2,4,4,5,99,0` becomes `2,4,4,5,99,9801` (99 \* 99 = 9801).
4. `1,1,1,4,99,5,6,0,99` becomes `30,1,1,4,2,5,6,0,99`.

---

## Part One: Restoring the Gravity Assist Program

Once you have a working Intcode computer, the first step is to restore the gravity assist program to the "1202 program alarm" state it had just before the last computer caught fire.

To do this, before running the program:

- Replace **position 1** with the value `12`.
- Replace **position 2** with the value `2`.

What value is left at position 0 after the program halts?

Your puzzle answer was `4570637`.

---

## Part Two: Finding the Input Noun and Verb

"Good, the new computer seems to be working correctly! Keep it nearby during this mission - you'll probably use it again. Real Intcode computers support many more features than your new one, but we'll let you know what they are as you need them."

"However, your current priority should be to complete your gravity assist around the Moon. For this mission to succeed, we should settle on some terminology for the parts you've already built."

Intcode programs are given as a list of integers; these values are used as the initial state for the computer's memory. When you run an Intcode program, make sure to start by initializing memory to the program's values. A position in memory is called an address (for example, the first value in memory is at "address 0").

Opcodes (like `1`, `2`, or `99`) mark the beginning of an instruction. The values used immediately after an opcode, if any, are called the instruction's parameters. For example, in the instruction `1,2,3,4`, `1` is the opcode, and `2`, `3`, and `4` are the parameters. The instruction `99` contains only an opcode and has no parameters.

The address of the current instruction is called the **instruction pointer**; it starts at `0`. After an instruction finishes, the instruction pointer increases by the number of values in the instruction. For the add and multiply instructions, this is always 4 (1 opcode + 3 parameters). The halt instruction would increase the instruction pointer by 1, but it halts the program instead.

---

### Task

To complete the gravity assist, you need to determine what pair of inputs produces the output `19690720`.

The inputs should still be provided to the program by replacing the values at addresses `1` and `2`, just like before. In this program:

- The value placed in **address 1** is called the **noun**.
- The value placed in **address 2** is called the **verb**.

Each of the two input values will be between `0` and `99`, inclusive.

Once the program has halted, its output is available at **address 0**. Each time you try a pair of inputs, make sure you first reset the computer's memory to the values in the program (your puzzle input). Do not reuse memory from a previous attempt.

Find the input noun and verb that cause the program to produce the output `19690720`. What is `100 * noun + verb`? For example, if `noun=12` and `verb=2`, the answer would be `1202`.

---

## Notes

- Make sure to handle the Intcode program by stepping through the instructions correctly.
- The solution for Part One is `4570637`.
