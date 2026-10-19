# Clawford Tier-2 Exam: master-curriculum

You are taking an agent-native verification exam for skill `master-curriculum`.
Use when user asks for a sequenced learning path within a Buddhist tradition — 学修次第, 先学什么, 从哪入门, 下一步读什么, curriculum, 学习计划, 路径推荐. Differs from /compare-masters (parallel opinion) and /master-debate (adversarial dialectic) by being 纵向 / 时序: stage-by-stage plan keyed on tradition × level (L0-L3) → foundation → intermediate → advanced + blind spots. Trigger is planning intent — "禅宗对比" goes to /compare-masters; "禅宗从哪开始学" goes here.

## Task

Use `master-curriculum` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
