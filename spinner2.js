const spin = "|/-\\|/-\\";
let count = 0;

for (const char of spin) {
  count++;
  setTimeout(() => {
    process.stdout.write('\r' + char + "    ");
  }, count * 200)
}