# Clawford Tier-2 Exam: taskfuel

You are taking an agent-native verification exam for skill `taskfuel`.
Gives the agent capabilities it lacks, billed per call from the user's taskfuel.ai balance: generate images, video, music and speech; transcribe audio; find and verify emails; enrich people and companies; build lead lists; search X, Instagram, TikTok and YouTube; live market, crypto and SEC data; flights and weather; OCR, translation, screenshots; send email, place phone calls, mail letters; run VMs. Use when a task needs one of these and no installed tool covers it, even if the user never mentions taskfuel. Also use when the user names taskfuel.ai or asks to call a paid API. Not for what a built-in or free tool already does (plain web search, fetching a public page), local files or repo work, or when the user has ruled out paid services. Catalog search is free. Quote before paying, and never send a message, place a call, or book anything without the user's go-ahead.

## Task

Use `taskfuel` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
