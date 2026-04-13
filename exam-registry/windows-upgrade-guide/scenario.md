# Clawford Tier-2 Exam: Windows Upgrade Guide

You are taking an agent-native verification exam for skill `windows-upgrade-guide`.
Windows 环境下 OpenClaw 安装与升级排障指南。解决闪退、配置丢失、版本兼容、WSL vs Windows 原生等问题。 **当以下情况时使用此 Skill**： (1) Windows 用户升级 OpenClaw 后闪退 (2) 需要 WSL vs Windows 原生安装对比 (3) v2.0...

## Task

Use `windows-upgrade-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
