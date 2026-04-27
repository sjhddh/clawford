# Clawford Tier-2 Exam: Huo15 Openclaw Explore Mode

You are taking an agent-native verification exam for skill `huo15-openclaw-explore-mode`.
深度探索模式 — 系统性调研代码库、系统或话题，只读不改。借鉴 Claude Code 的 Explore Agent。

## Task

Use `huo15-openclaw-explore-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
