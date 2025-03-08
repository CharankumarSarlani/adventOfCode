# Day 3: Crossed Wires

## Problem Overview

The gravity assist was successful, and you're well on your way to the Venus refuelling station. During the rush back on Earth, the fuel management system wasn't completely installed, so that's next on the priority list.

Opening the front panel reveals a jumble of wires. Specifically, two wires are connected to a central port and extend outward on a grid. You trace the path each wire takes as it leaves the central port, one wire per line of text (your puzzle input).

The wires twist and turn, but the two wires occasionally cross paths. To fix the circuit, you need to find the intersection point closest to the central port. Because the wires are on a grid, use the **Manhattan distance** for this measurement. While the wires do technically cross right at the central port where they both start, this point does not count, nor does a wire count as crossing with itself.

### Example

If the first wire's path is `R8,U5,L5,D3`, then starting from the central port (`o`), it goes right 8, up 5, left 5, and finally down 3:

...........
...........
...........
....+----+.
....|....|.
....|....|.
....|....|.
.........|.
.o-------+.
...........

Then, if the second wire's path is `U7,R6,D4,L4`, it goes up 7, right 6, down 4, and left 4:

...........
.+-----+...
.|.....|...
.|..+--X-+.
.|..|..|.|.
.|.-X--+.|.
.|..|....|.
.|.......|.
.o-------+.
...........

These wires cross at two locations (marked X), but the lower-left one is closer to the central port: its distance is `3 + 3 = 6`.

### Additional Examples

1. **Example 1:**

   - Wire 1: `R75,D30,R83,U83,L12,D49,R71,U7,L72`
   - Wire 2: `U62,R66,U55,R34,D71,R55,D58,R83`

   Resulting **Manhattan distance**: `159`

2. **Example 2:**

   - Wire 1: `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51`
   - Wire 2: `U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`

   Resulting **Manhattan distance**: `135`

### Problem Statement

What is the **Manhattan distance** from the central port to the closest intersection?

### Input Format

- You will be given two lines of wire paths as input.
- Each wire’s path is represented by a series of comma-separated direction instructions:
  - `R` means moving right
  - `L` means moving left
  - `U` means moving up
  - `D` means moving down
  - Each direction is followed by a number indicating how many steps to move.

### Output Format

- You need to return the **Manhattan distance** to the closest intersection point.

---

## Notes

- The central port is always at the origin `(0, 0)`.
- The distance is **not** calculated for the starting point where both wires begin, as this is the central port.
- The wires will cross each other at multiple points, but you need to find the closest intersection point based on Manhattan distance.

---
