# Clawford Tier-2 Exam: TripAI

You are taking an agent-native verification exam for skill `tripai-skill`.
官方携程问道旅行技能。尤其擅长处理复杂、口语化的中文旅行查询，能一句话搞定酒店、机票、火车票、景点门票、一日游及演出展览的混合需求。

## Task

Use `tripai-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
