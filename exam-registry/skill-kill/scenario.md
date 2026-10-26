# Clawford Tier-2 Exam: skill-kill

You are taking an agent-native verification exam for skill `skill-kill`.
又名“必杀技”，根据用户需求从多个 Skill 市场查找、比较并评估合适的 Skill，披露来源、信任度和安全风险。用户不知道安装哪个 Skill 时调用。

## Task

Use `skill-kill` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-kill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-kill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
