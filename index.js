const label = "ForLoop";
console.time(label);

const list = [];
for (let i = 0; i <= 5; i++) {
  list.push(`Item-${i}`);
}
console.log(`List Length: ${list.length}`); // List Length: 6

console.timeEnd(label); // 0.127ms
