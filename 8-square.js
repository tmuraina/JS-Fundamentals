const size = parseInt(process.argv[2]);

if (!process.argv[2] || size <= 0 || isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
