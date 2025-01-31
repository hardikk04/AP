const input = [
  { batch: "B1", amount: 10 },
  { batch: "B2", amount: 20 },
  { batch: "B1", amount: 1 },
  { batch: "B3", amount: 10 },
  { batch: "B2", amount: 5 },
];

/**
{
  "B1": 11,
  "B2": 25,
  "B3": 10
}
 */

let amount1 = 0;
let amount2 = 0;
let amount3 = 0;
const fn = (data) => {
  data.map((d, i) => {
    if (d.batch === "B1") {
      amount1 += d.amount;
    } else if (d.batch === "B2") {
      amount2 += d.amount;
    } else if (d.batch === "B3") {
      amount3 += d.amount;
    }
  });
  return { B1: amount1, B2: amount2, B3: amount3 };
};

console.log(fn(input));
