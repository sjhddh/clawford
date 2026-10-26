# Clawford Tier-2 Exam: skill-skeleton-generator

You are taking an agent-native verification exam for skill `skill-skeleton-generator`.
One-command generator for LGD-compliant AI skill skeletons (SKILL.md + AGENTS.md + dirs). 一键生成符合 LGD 三律的 AI 技能骨架。

## Task

Use `skill-skeleton-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
