import { wire1, wire2 } from "./input.js";

const manhattanDistance = (x, y) => Math.abs(x) + Math.abs(y);

const parse = (move) => {
  const direction = move[0];
  const length = parseInt(move.slice(1), 10);
  return { length, direction };
};

const calculateSteps = (wirePath) => {
  const steps = {};
  let x = 0;
  let y = 0;
  let totalSteps = 0;

  wirePath.forEach((move) => {
    const { length, direction } = parse(move);

    for (let i = 0; i < length; i++) {
      if (direction === "R") x++;
      if (direction === "L") x--;
      if (direction === "U") y++;
      if (direction === "D") y--;

      totalSteps++;

      if (!steps[`${x},${y}`]) {
        steps[`${x},${y}`] = totalSteps;
      }
    }
  });

  return steps;
};

const findIntersections = (wire1Steps, wire2Steps) => {
  const intersections = [];
  for (const position in wire1Steps) {
    if (wire2Steps[position]) {
      const [x, y] = position.split(",").map(Number);
      intersections.push([x, y]);
    }
  }
  return intersections;
};

const findClosestIntersection = (intersections) => {
  return Math.min(...intersections.map(([x, y]) => manhattanDistance(x, y)));
};

const findFewestSteps = (wire1Steps, wire2Steps, intersections) => {
  return Math.min(
    ...intersections.map(
      ([x, y]) => wire1Steps[`${x},${y}`] + wire2Steps[`${x},${y}`]
    )
  );
};

const main = () => {
  const wire1Steps = calculateSteps(wire1.split(","));
  const wire2Steps = calculateSteps(wire2.split(","));

  const intersections = findIntersections(wire1Steps, wire2Steps);

  const closestDistance = findClosestIntersection(intersections);

  const fewestSteps = findFewestSteps(wire1Steps, wire2Steps, intersections);

  console.log("Closest Manhattan distance:", closestDistance);
  console.log("Fewest combined steps:", fewestSteps);
};

console.time();
main();
console.timeEnd();
