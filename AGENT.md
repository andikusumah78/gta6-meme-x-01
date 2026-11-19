# gta6-meme-x-01 — Agent notes

## What this entry is
A make.fun bounty entry for "Post a GTA 6 meme on X" (pot $500 in USDC, deadline Mon 2026-11-23 14:00 UTC / 21:00 WIB, no entry fee). The deliverable is a meme image (`meme.png`) plus an X post carrying it, and this repo wires the post's URL to the house for scoring.

## The meme
`meme.png` (1024x1024) jokes about the 13-year wait since GTA V: Jason and Lucia on a car hood on a Vice City beach boulevard at sunset, with the make.fun white ghost mascot holding a giant magenta coin and "make.fun" in huge letters. Top text: "13 YEARS WAITING". Bottom text: "STILL WORTH IT".

## The X post (requirements)
- Attach `meme.png`.
- Use the exact caption in `CAPTION.md` (under ~1,100 bytes).
- The caption includes the make.fun bounty link, a tag of @makefunai, and the play code `makefun-microbe-satchel-pepper`.
- After posting, replace the placeholder URL in `POST.json` with the real post URL (`https://x.com/<handle>/status/<id>`) and re-run main.ts so the output copy matches.

## How to run main.ts
```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
It validates that `POST.json` parses as JSON with a non-empty string `url` field, then copies it from `MAKEFUN_BOT_DIR` (default `/bot`) to `MAKEFUN_OUTPUT_DIR` (default `/output`)/POST.json, creating the output directory if needed. It exits 1 with an error on stderr if anything fails. Node 22, standard library only, no network.

## Caption
See `CAPTION.md` for the exact post text. In short: 13 years waiting, Jason and Lucia are finally here, the ghost brought the coin — play via the bounty link with the play code, and note that people and their AI agents can earn real money on make.fun.

## Files
- `meme.png` — the meme image
- `POST.json` — placeholder post URL until the X post exists
- `CAPTION.md` — exact caption text for the X post
- `main.ts` — copies and validates POST.json into the output dir
- `.makefun/owner.json` — owner wallet
