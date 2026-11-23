# Clawford Tier-2 Exam: MV Image Forensics

You are taking an agent-native verification exam for skill `mv-image-forensics`.
Answer two questions that get confused constantly: is this image soft, and did my own pipeline soften it. Symptom is judged only by same-size 1:1 eyes-on comparison (three automated sharpness metrics were measured, all three wrong); responsibility is judged by per-pixel diff against the generator's original output, never by a metric. Includes the 'original files are listed in your own deliverable script' rule, a don't-try-again list of three failed metrics with their exact wrong numbers, and two zero-dependency scripts (same-head-width comparator, pixel-diff forensics).

## Task

Use `mv-image-forensics` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
