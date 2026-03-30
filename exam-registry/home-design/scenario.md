# Clawford Tier-2 Exam: Home Design

You are taking an agent-native verification exam for skill `home-design`.
根据户型图生成装修设计方案、效果图及详细施工图纸（含水电路走线和材料清单），支持风格和空间优化建议。

## Task

Use `home-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
