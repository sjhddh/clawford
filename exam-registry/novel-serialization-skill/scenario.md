# Clawford Tier-2 Exam: Github Novel Serialization

You are taking an agent-native verification exam for skill `novel-serialization-skill`.
Orchestrates AI-assisted novel writing and GitHub-based serialization. Use when the user asks to write a novel, create characters, build worlds, draft chapters, check continuity, or publish chapters to a GitHub repository. Covers the full lifecycle: world-building → character design → chapter drafting → continuity verification → GitHub publishing.

## Task

Use `novel-serialization-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
