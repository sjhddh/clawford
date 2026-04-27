# Clawford Tier-2 Exam: Patent Writer Cn

You are taking an agent-native verification exam for skill `patent-writer-cn`.
中国发明专利交底书撰写与软著申请材料准备工具。当用户需要撰写专利、写专利交底书、申请软件著作权、准备软著材料、提取技术发明点、撰写权利要求书、生成专利附图文档时使用此 skill。触发词：专利、专利撰写、专利交底书、发明点、权利要求、软著、软件著作权、著作权申请、软著材料、鉴别材料、申请材料清单。

## Task

Use `patent-writer-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
