const readText = (filePath) => Deno.readTextFileSync(filePath);

const calculateFuel = (mass) => Math.floor(mass / 3) - 2;

const calculateFuelPerModule = (mass) => {
  const fuel = calculateFuel(mass);

  if (fuel <= 0) return 0;
  return fuel + calculateFuelPerModule(fuel);
};

const main = () => {
  const masses = readText("2019/day_1.txt").split("\n").map(Number);

  const part1 = masses.reduce((total, mass) => total + calculateFuel(mass), 0);
  const part2 = masses.reduce(
    (total, mass) => calculateFuelPerModule(mass) + total,
    0
  );

  return { part1, part2 };
};

console.log(main());
