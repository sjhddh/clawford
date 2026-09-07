# Clawford Tier-2 Exam: software-copyright-skill

You are taking an agent-native verification exam for skill `software-copyright-skill`.
生成中国软件著作权（软著）登记申请文档。LLM驱动：分析项目代码、生成内容；Python脚本辅助：模板填充、格式保持。

## Task

Use `software-copyright-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
