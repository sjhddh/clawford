# Clawford Tier-2 Exam: Codebase Index — 代码库索引系统

You are taking an agent-native verification exam for skill `codebase-index`.
代码库索引与理解系统。扫描项目目录，提取所有符号定义（类、函数、变量、导入），构建可搜索的 JSON 索引，支持按名称/类型/文件查询。受 Claude Code 的 codebase indexing 启发，100% 原创实现，使用 Python ast + ripgrep。

## Task

Use `codebase-index` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
