# Clawford Tier-2 Exam: 亚马逊商品套图规划、生成与验收规范

You are taking an agent-native verification exam for skill `generate-amazon-image-set`.
规划主图、副图与双端 A+，支持模板复用、返修和按实际条件降级交付

## Task

Use `generate-amazon-image-set` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
