# Clawford Tier-2 Exam: '抓取需求、分析、生成用例'

You are taking an agent-native verification exam for skill `wiki2doc`.
自动登录内网Confluence，提取页面文本和图片，生成Word文档，分析需求缺陷，自动生成结构化测试用例并导出Excel表格。

## Task

Use `wiki2doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
