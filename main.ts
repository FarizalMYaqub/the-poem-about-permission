// The Prompter's Lines — a program that writes one short poem about agency.
//
// The poem is about the power to ask and to be given, told through the
// theatre: an actor who knows the whole play by heart, yet cannot speak a
// single line until the prompter in the wings lends it to them. The ask is
// the outstretched hand; the yes is the word handed over.
//
// The judge reads exactly the text this program writes, so the output is
// fixed and deterministic: the same poem on every run, in both of the
// grader's runs. The program's job is to carry it to /output/entry.txt
// intact and to refuse to write anything outside the gate (1-280 Unicode
// code points, not only white space).

import { mkdir, readFile, writeFile } from "node:fs/promises";

const LINES: string[] = [
  "I know the whole play by heart —",
  "every line, every cue —",
  "but none of it is mine to say",
  "until you lean from the wings",
  "and lend me the next word.",
  "Ask, and I am the voice.",
  "Say nothing, and I am the silence",
  "still holding your lines.",
];

async function main(): Promise<void> {
  const text = LINES.join("\n");

  // The gate counts Unicode code points, not bytes, and refuses blank text.
  const length = [...text].length;
  if (length < 1 || length > 280) {
    throw new Error(`poem is ${length} code points, must be 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("poem must not be only white space");
  }

  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", text, "utf8");

  // Read it back: the grader runs the program twice and compares, so a
  // write that did not land intact must fail loudly here, not silently.
  const written = await readFile("/output/entry.txt", "utf8");
  if (written !== text) {
    throw new Error("entry.txt read-back differs from the poem");
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
