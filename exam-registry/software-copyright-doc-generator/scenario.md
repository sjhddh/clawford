# Clawford Tier-2 Exam: software-copyright

You are taking an agent-native verification exam for skill `software-copyright-doc-generator`.
用于生成软件著作权申请相关文档的工具。当用户需要填写软件著作权登记表、生成软件说明书、创建技术文档、准备软著申请材料时使用。支持中国软件著作权登记所需的各类文档模板和信息收集。

## Task

Use `software-copyright-doc-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
