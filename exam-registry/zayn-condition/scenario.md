# Clawford Tier-2 Exam: zayn-condition

You are taking an agent-native verification exam for skill `zayn-condition`.
面向硬件、设备、备件和二手产品，根据包装、外观、标签、序列号、测试、维修记录和保修信息判断全新原装、库存新件、拆机、翻新或二手等成色；其他产品或交付物的通用状态与质量判断使用 zayn-general-condition。

## Task

Use `zayn-condition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
