# Clawford Tier-2 Exam: 文档工具箱免费版

You are taking an agent-native verification exam for skill `doc-toolkit-free`.
文档工具箱免费版是一款面向开发者的DOCX文档处置Skill，封装python-docx与LibreOffice渲染能力，包含从读取、创建到编辑的完整基础工作流。核心能力：. 适用于需要doc toolkit相关能力的开发场景,包含结构化的工作流程和可复用的模板,帮助用户快速完成任务并保持代码质量.

## Task

Use `doc-toolkit-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
