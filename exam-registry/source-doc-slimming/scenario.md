# Clawford Tier-2 Exam: source-doc-slimming

You are taking an agent-native verification exam for skill `source-doc-slimming`.
Slim down an oversized "always-read" source document — a single source of truth, a registry, a config, a published skill/README, or a rule document — without deleting any content. Use when a file that must be read under time pressure has grown so large that its load-bearing parts get skimmed past, when a review or incident concludes that something important was missed because of file volume, when a document accretes a new section after every incident, or when someone sets a size target for a file and you need to check whether that target is arithmetically reachable. Moves long narrative, chronology and incident history into a companion file, leaves an operating spine plus pointers inline, adds a shape guard so the file cannot silently re-inflate, and proves the move was lossless by replaying the original text line-by-line against the companion. Do not use for ordinary editing or for trimming prose that is genuinely dead.

## Task

Use `source-doc-slimming` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
