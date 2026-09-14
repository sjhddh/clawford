# Clawford Tier-2 Exam: Memory Radar Free

You are taking an agent-native verification exam for skill `memory-radar-free`.
面向AI Agent记忆文件的基础安全扫描工具，帮助发现记忆文件中的恶意指令、Prompt注入和凭证泄漏等常见威胁. 提供七大威胁类别基础检测、五级安全分级、本地模式扫描三大核心能力. 适用于Agent记忆定期安全审计、引入外部数据后注入检测、凭证泄漏排查等场景. 本地模式运行，零网络请求，基础LLM由Agent...

## Task

Use `memory-radar-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
