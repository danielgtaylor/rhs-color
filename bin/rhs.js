#!/usr/bin/env node
const rhs = require('..');

if (process.argv.length < 3) {
  console.log('Usage: rhs-color <RHS or hex color value>')
  return 255;
}

const i = process.argv[2];

if (/^[0-9]{1,3}[a-z]$/i.test(i)) {
  console.log(`${i.toUpperCase()} => [${rhs.rgb(i).join(',')}] #${rhs.hex(i)} ${rhs.name(i)}`);
} else if (i.startsWith('#') || i.length === 3 || i.length === 6) {
  const val = rhs.fromRgb(i);
  console.log(`${i} => RHS ${val} ${rhs.name(val)} (#${rhs.hex(val)})`);
} else {
  console.log(`Unknown input format '${i}'`);
}
