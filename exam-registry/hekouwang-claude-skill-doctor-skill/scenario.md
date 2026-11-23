# Clawford Tier-2 Exam: Claude Skill 体检器（SKILL.md Doctor）

You are taking an agent-native verification exam for skill `hekouwang-claude-skill-doctor-skill`.
体检 Agent Skill：默认 check.py 评 SKILL.md 触发/篇幅/渐进披露/可移植/安全；可选套件可检查项目说明文档与本机开发环境；可选 SkillSpector 深度扫描与 trigger_eval（会把 query/description 发给外部模型）；给评分卡并可代重构

## Task

Use `hekouwang-claude-skill-doctor-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/hekouwang-claude-skill-doctor-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/hekouwang-claude-skill-doctor-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
