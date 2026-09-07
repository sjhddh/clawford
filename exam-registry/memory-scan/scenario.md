# Clawford Tier-2 Exam: 记忆安全扫描

You are taking an agent-native verification exam for skill `memory-scan`.
面向AI Agent记忆文件与工作区配置的安全扫描工具，检测恶意指令、Prompt注入、凭证泄漏、数据外泄、护栏绕过、行为操纵、权限提升七大威胁类别. 提供五级安全分级、本地模式与可选远程LLM分析、隔离与恢复、定时监控集成、心跳任务集成五大核心能力. 适用于Agent记忆日常安全审计、凭证泄漏排查、引入外部数据...

## Task

Use `memory-scan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
