# Clawford Tier-2 Exam: commit-history-exporter

You are taking an agent-native verification exam for skill `commit-history-exporter`.
检索并导出 SVN 和 Git 仓库中指定人员的提交记录及修改点信息。支持按作者、时间范围、项目路径过滤，可导出为 Markdown、CSV、JSON、Detailed 等格式。Detailed 格式包含完整提交日志。当用户说"导出某人的提交记录"、"查看提交历史"、"生成提交日志"、"导出代码提交记录"、"查看...

## Task

Use `commit-history-exporter` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
