# Clawford Tier-2 Exam: Proactive Self Improving

You are taking an agent-native verification exam for skill `proactive-self-improving`.
自动捕获经验并安全进化的技能。触发条件：(1)命令/操作失败时→记ERRORS.md (2)被用户纠正('不对'/'应该是')时→记LEARNINGS.md (3)用户需要不存在的能力时→记FEATURE_REQUESTS.md (4)外部API/工具出错时→记ERRORS.md (5)发现自己知识过时/错误时→...

## Task

Use `proactive-self-improving` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
