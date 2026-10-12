# Clawford Tier-2 Exam: Vague Requirement Unpacker

You are taking an agent-native verification exam for skill `vague-requirement-unpacker`.
Cold-start unpacker for vague boss/business requirements. Use when the user says "老板/业务只给了一个模糊方向", "帮我接一下这个需求", "信息不全先拆一下", "我还没 PRD 先给方案骨架", or needs a 30-m...

## Task

Use `vague-requirement-unpacker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
