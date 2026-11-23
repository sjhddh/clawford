# Clawford Tier-2 Exam: skill-portfolio-audit

You are taking an agent-native verification exam for skill `skill-portfolio-audit`.
Generates evidence-based portfolio audits, candidate scorecards, privacy classifications, consolidation plans, and a persistent execution queue with dependency-linked tasks for Skill portfolio management. The audit is read-only against existing Skills: it does not modify, delete, publish, or execute any original Skill; the persistent execution queue writes only to a separate task ledger file outside the audited Skills. Use when the user asks to inventory Skills, identify duplicated or stale Skills, decide which recurring workflows deserve standalone Skills, or assess which Skills are safe and valuable to share publicly. 中文触发词: 技能组合审计, 机会评估, 重复检测, 分享价值分级

## Task

Use `skill-portfolio-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
