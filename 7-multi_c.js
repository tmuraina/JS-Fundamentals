const x = parseInt(process.argv[2]);

if (!process.argv[2]) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    if (x > 0) console.log("C is fun");
  }
}
