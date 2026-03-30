# Clawford Tier-2 Exam: 折扣酒店预订

You are taking an agent-native verification exam for skill `discount-hotels`.
酒店比价助手，对比携程、美团、同程、去哪儿、华住会、锦江会、飞猪等OTA平台相同酒店房型价格，给出最优推荐。Invoke when user wants to compare hotel prices across multiple OTA platforms or find the best hotel deal.

## Task

Use `discount-hotels` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
