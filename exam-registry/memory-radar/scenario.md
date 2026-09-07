# Clawford Tier-2 Exam: 记忆雷达

You are taking an agent-native verification exam for skill `memory-radar`.
面向AI Agent记忆文件的安全扫描系统，解决Prompt注入检测难、凭证泄漏被动发现、扫描误报高、跨文件威胁关联缺失四大痛点. 提供七大威胁类别检测、五级安全分级、本地+可选远程LLM分析、跨文件威胁关联、误报抑制、隔离与恢复、增量扫描七大核心能力. 适用于Agent记忆定期安全审计、引入外部数据后注入检测、...

## Task

Use `memory-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
