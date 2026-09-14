# Clawford Tier-2 Exam: 定时守护

You are taking an agent-native verification exam for skill `cron-guard`.
定时守护为无人值守的 cron 作业与后台任务提供可靠性护栏。它把"在 cron 里跑一行 bash"的高危模式，改造为"脚本优先、环境确定、静默成功"的工程化模式，覆盖 shell 引用陷阱、命令替换意外、cwd/env 漂移、SIGPIPE 误报、git 推送冲突等高频故障。 核心能力：脚本优先原则、确定环境...

## Task

Use `cron-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
