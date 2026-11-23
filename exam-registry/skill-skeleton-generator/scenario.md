# Clawford Tier-2 Exam: Skill Skeleton Generator（技能骨架生成器）

You are taking an agent-native verification exam for skill `skill-skeleton-generator`.
One-command generator for LGD-compliant AI skill skeletons (SKILL.md + AGENTS.md + dirs) with full frontmatter scaffolding. 一键生成符合 LGD 三律/四角度合规的新技能骨架（SKILL.md + AGENTS.md），规范化 frontmatter 起步。

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
