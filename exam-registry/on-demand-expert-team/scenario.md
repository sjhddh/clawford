# Clawford Tier-2 Exam: On-Demand Expert Team

You are taking an agent-native verification exam for skill `on-demand-expert-team`.
收到任务后即时设计并临时拉起专家团端到端运行直至交付，角色提示词即席生成内联注入，不产出系列提示词；触发词：拉起专家团、临时专家团、即时专家团、专家团运行、组团跑任务、meta-skill-system

## Task

Use `on-demand-expert-team` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
