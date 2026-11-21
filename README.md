# The Prompter's Lines

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/FarizalMYaqub/the-poem-about-permission/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/FarizalMYaqub/the-poem-about-permission/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

A program that writes one short poem about agency — the power to ask and
to be given. The poem is told through the theatre: an actor who knows the
whole play by heart, yet cannot speak a single line until the prompter in
the wings lends it to them. The ask is the outstretched hand; the yes is
the word handed over.

## Run it

```sh
node main.ts
# writes /output/entry.txt (UTF-8, 228 characters, 8 lines)
```

`main.ts` (Node 22, standard library only) writes the fixed poem to
`/output/entry.txt` and validates it first: 1–280 Unicode code points,
not only white space. The output is deterministic — the same text on
every run.
