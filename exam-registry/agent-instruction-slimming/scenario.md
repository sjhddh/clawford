# Clawford Tier-2 Exam: agent-instruction-slimming

You are taking an agent-native verification exam for skill `agent-instruction-slimming`.
Reduce an agent instruction file (AGENTS.md, system prompt, rule file) without losing coverage: lever order (remove first, move second, reformat third, rewrite last), verbatim-subset edits with pointer lines, joint marker accounting, and tiering by frequency and reversibility. Use when a rule file has grown too large, when rules are being ignored, or before adding more rules. Tool-agnostic; includes marker counting and subset checking scripts.

## Task

Use `agent-instruction-slimming` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
