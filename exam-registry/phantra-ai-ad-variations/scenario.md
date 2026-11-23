# Clawford Tier-2 Exam: Phantra AI: Ad Variations

You are taking an agent-native verification exam for skill `phantra-ai-ad-variations`.
Makes A/B variants of a saved Phantra scene with `duplicate_scene`, changing one thing (the hook, the length, the first shot, the product photo or the video model), each a new scene priced on its own and read back later with `what_works`. Use when someone asks for versions, variants, an A/B test, "try it shorter" or "same ad with the other photo". NOT for the first version (write-scene), a first set of ads from one product photo (product-ad-set) or setting a look (look-matching).

## Task

Use `phantra-ai-ad-variations` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
