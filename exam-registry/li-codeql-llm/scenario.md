# Clawford Tier-2 Exam: Li_codeQL_LLM

You are taking an agent-native verification exam for skill `li-codeql-llm`.
CodeQL 安全扫描与 LLM 智能分析融合工具。自动检测 CodeQL 安装、扫描指定目录、生成漏洞报告、LLM 分析、Jenkins 集成、输出验证 Checklist。

## Task

Use `li-codeql-llm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
