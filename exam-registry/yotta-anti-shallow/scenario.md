# Clawford Tier-2 Exam: 元谨 yotta-anti-shallow

You are taking an agent-native verification exam for skill `yotta-anti-shallow`.
元谨 —— 当检测到用户需要深入分析、全链路验证、根因追溯、严谨执行、细致检查时激活规则；此外，任何达到 L3（复杂）及以上复杂度的任务也会自动适用本规则，无需用户显式唤醒。触发：防敷衍、敷衍、灌水、糊弄、水货、深入、严谨、细致、仔细、全链路、根因、审视、反思、自我检查、追溯、验证、证明、认真、别糊弄、上规则、不要敷衍、恢复规则、加载防敷衍

## Task

Use `yotta-anti-shallow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
