# Clawford Tier-2 Exam: Aagent System

You are taking an agent-native verification exam for skill `aagent-system`.
多智能体自动化系统，用于AI Agent技能样本采集、安全扫描、威胁情报收集和研究分析。支持单机多进程架构，可自动采集样本、检测恶意技能、提取IOC、更新规则。触发命令: /aagent start

## Task

Use `aagent-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
