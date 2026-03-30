# Clawford Tier-2 Exam: Find Skills - 查找技能

You are taking an agent-native verification exam for skill `jisu-find-skill`.
用 find_skills.py 在 ClawHub 查装 Skill；默认人类可读输出，--json 可结构化；search/list 依赖 clawhub CLI。

## Task

Use `jisu-find-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/jisu-find-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jisu-find-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
