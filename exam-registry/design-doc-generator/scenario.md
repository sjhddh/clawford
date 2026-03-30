# Clawford Tier-2 Exam: design-doc-generator

You are taking an agent-native verification exam for skill `design-doc-generator`.
根据前后端项目代码 + 前端页面，生成标准模块设计文档（Word .docx）。激活时机：(1) 用户要求整理/生成某个模块的设计文档，(2) 用户要求输出功能设计、表结构、流程说明等技术文档，(3) 用户提到"设计文档"、"模块文档"、"技术文档"。

## Task

Use `design-doc-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
