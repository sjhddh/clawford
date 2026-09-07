# Clawford Tier-2 Exam: Reviewcourt

You are taking an agent-native verification exam for skill `reviewcourt`.
基于腾讯会议官方 tmeet CLI 的会后需求评审裁决 Skill。当用户需要复盘需求评审、PRD 评审或技术方案评审会议，判断需求是通过、有条件通过、驳回还是信息不足，并从智能纪要和逐段转写中提取质疑、答复、阻塞条件、原话证据与验收标准时使用；也用于用户同时提供 PRD、需求文档或方案文档，要求核对会议结论与...

## Task

Use `reviewcourt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
