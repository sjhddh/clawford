# Clawford Tier-2 Exam: code-risk-agent

You are taking an agent-native verification exam for skill `code-risk-agent`.
当用户需要扫描代码安全漏洞、审计代码、分析 C/Python 风险、检查依赖漏洞、或生成安全报告时触发。支持云端 LLM 语义分析和本地 GPU 回退。

## Task

Use `code-risk-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
