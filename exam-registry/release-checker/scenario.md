# Clawford Tier-2 Exam: release-checker

You are taking an agent-native verification exam for skill `release-checker`.
一体化发版兼容性检查工具。自动分析 Git diff 检测发版兼容性，通过代码智能识别推送中心/Gateway/配置变更，自动检测 SQL 脚本兼容性并生成多数据库版本，输出完整的 TODO 清单和 Markdown 报告。

## Task

Use `release-checker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
