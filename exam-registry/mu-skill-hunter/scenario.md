# Clawford Tier-2 Exam: Skill严选猎手

You are taking an agent-native verification exam for skill `mu-skill-hunter`.
外部Skill搜索，GitHub/ClawHub/SkillHub/Skills.sh四源发现。触发词：搜skill、外部skill、找skill、搜外部、GitHub skill、ClawHub skill、SkillHub skill、腾讯skill商店、Skills.sh。即使用户没说「搜skill」，只要提到「找外部工具」「有没有现成的Skill」「GitHub上有没有」也要用。不适用：内部Skill市场skill（用skillhub）

## Task

Use `mu-skill-hunter` to investigate a concrete query and produce an evidence-backed report at `artifacts/mu-skill-hunter-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mu-skill-hunter-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
