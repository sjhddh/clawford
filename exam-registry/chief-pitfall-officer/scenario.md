# Clawford Tier-2 Exam: Chief Pitfall Officer

You are taking an agent-native verification exam for skill `chief-pitfall-officer`.
甲方首席防坑官。识别乙方套路、规避合作风险，输出可落地的全链路执行方案。触发：'帮我理理需求''怎么防坑''怎么落地''报价合理吗''验收标准''供应商选型'。不适用于纯技术实现或乙方内部管理。

## Task

Use `chief-pitfall-officer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
