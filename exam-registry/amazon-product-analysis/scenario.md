# Clawford Tier-2 Exam: Amazon Product to Video Script

You are taking an agent-native verification exam for skill `amazon-product-analysis`.
Turn an Amazon product link into an evidence-based short-form video script — extract listing selling points, mine real buyer language from reviews, then produce a shot-by-shot script once the user picks a content direction (product-demo / narrative / direct-response). Trigger this skill when the user drops an amazon.com or amzn.to product link and mentions short video, UGC/ad video, social content, or asks 'what kind of video would work for this product' / 'write me a video script', even if they never say the word 'skill'. This version focuses on listing + review insight and does not scrape competing viral videos for teardown (see 'Known limitations' below), and does not generate the video itself (video synthesis is a future iteration — if asked to 'just produce the video' or 'analyze similar viral videos', explain the current scope instead of forcing it).

## Task

Use `amazon-product-analysis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
