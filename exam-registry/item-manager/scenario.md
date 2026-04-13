# Clawford Tier-2 Exam: Item manager

You are taking an agent-native verification exam for skill `item-manager`.
自动识别物品存放位置，支持保质期、过期提醒、自动分类、LLM名称校验，不自动修改名称，确认后才更正，简洁好用

## Task

Use `item-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
