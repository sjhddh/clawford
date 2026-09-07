# Clawford Tier-2 Exam: latex-modular

You are taking an agent-native verification exam for skill `latex-modular`.
LaTeX 模块化组合技能。提取 LaTeX 文档头/组件（表格、图片、列表、章节样式）作为可组合模块，通过 Python 脚本稳定组合生成不报错的 lualatex 文档，支持从原始 LaTeX 代码重构进模块化体系。

## Task

Use `latex-modular` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
