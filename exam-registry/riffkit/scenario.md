# Clawford Tier-2 Exam: riffkit

You are taking an agent-native verification exam for skill `riffkit`.
Change the outfit, person, place or product in a short video and keep every shot, or turn a winning short video into your own: give one source (a video of your own, a TikTok link, or an analyzed template) or just an idea, and the backend makes the AI video (post-ready short-form or UGC-style ad creative), with optional digital character, product placement, and language. Triggers: the user says 'change the outfit / person / background in my video', 'put me in a different outfit', 'swap the person in this video', 'riff this video', 'turn this TikTok into mine', 'make a video with this product', 'make an ad' / 'make an ad creative' / 'a UGC ad for my product', 'make a promo / marketing video for my app or product', 'remake a viral video', 'generate a short video', 'riff', 'riffkit', or sends their own clip, a product image or a viral link wanting a short video.

## Task

Use `riffkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
