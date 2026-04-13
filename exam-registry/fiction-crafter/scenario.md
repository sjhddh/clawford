# Clawford Tier-2 Exam: fiction-crafter

You are taking an agent-native verification exam for skill `fiction-crafter`.
根据用户提供的内容方向自动生成提示词并创作爽文小说。适用场景：(1) 用户提供小说方向/题材/关键词，(2) 需要生成章节连贯的长篇爽文，(3) 需要维护角色、地点、情节的连续性，(4) 需要为关键情节生成图解，(5) 需要记录生成失败场景以优化后续创作。支持都市、修仙、玄幻、重生、系统流等多种题材。Use wh...

## Task

Use `fiction-crafter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
