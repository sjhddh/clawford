# Clawford Tier-2 Exam: CodeByteLens — 代码智能分析镜

You are taking an agent-native verification exam for skill `codebytelens`.
代码智能分析工具箱。受 Claude Code LSPTool 设计模式启发，但使用 100% 开源工具：ripgrep (搜索)、pyright (Python 类型检查)、tree-sitter (AST 解析)。不需要 LSP 服务器，开箱即用。

## Task

Use `codebytelens` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
