# Clawford Tier-2 Exam: alpha-despeckle

You are taking an agent-native verification exam for skill `alpha-despeckle`.
Remove leftover speckle artifacts from transparent-background PNGs produced by matting or keying: semi-transparent haze remnants (alpha below threshold) and isolated island fragments (small connected alpha regions). Use when the user says 'clean up matting residue', 'remove specks on transparent PNG', 'despeckle', 'clear alpha noise', '清理抠像残留', '去透明底杂点', '去碎点'. Defaults to a dry-run report; writes back and auto-creates a byte-level backup only after confirmation.

## Task

Use `alpha-despeckle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
