# Clawford Tier-2 Exam: anchor-spec

You are taking an agent-native verification exam for skill `anchor-spec`.
Tiered project anchors for AI coding agents. Tier a project (T0 zero-anchor / T1 seed card / T2 full anchor), maintain it with a three-layer information model (snapshot README ≤150 lines, append-only EVOLUTION, raw log), and let anchor-doctor automate lifecycle care (cold-storage banners, distillation, archiving). Trigger on: new project / continue / resume / where were we / project anchor / seed card.

## Task

Use `anchor-spec` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
