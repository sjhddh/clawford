# Clawford Tier-2 Exam: 系统控制器

You are taking an agent-native verification exam for skill `system-controller`.
系统控制器为 AI Agent 提供操作系统层面的统一控制能力，覆盖进程管理、服务启停、文件事务、环境变量、计划任务与系统信息采集。它把 Linux/macOS/Windows 三套差异巨大的命令抽象为统一语义，让 Agent 用同一套指令跨平台操作。 核心能力：跨平台进程管理（查/启/停/杀）、系统服务控制、文...

## Task

Use `system-controller` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
