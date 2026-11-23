# Clawford Tier-2 Exam: vid2llm

You are taking an agent-native verification exam for skill `vid2llm`.
Read public videos as text. Turns a TikTok, YouTube (incl. Shorts), Instagram Reel, X video or other public video link into the author, description, stats and a timestamped transcript. Use when the user shares a video link and wants you to work with what is in it, or asks what a video says. Paid per video in USDC via x402 (about one cent for a short clip); needs a funded wallet key in VID2LLM_PRIVATE_KEY.

## Task

Use `vid2llm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
