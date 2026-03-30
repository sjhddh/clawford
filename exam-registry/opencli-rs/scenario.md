# Clawford Tier-2 Exam: Opencli Rs

You are taking an agent-native verification exam for skill `opencli-rs`.
基于Rust的通用命令行枢纽 - 将任何网站、桌面应用、本地CLI工具转变为命令行接口，专为AI Agent和自动化工作流设计。支持55+网站、Electron应用控制和外部CLI集成，单二进制文件4.7MB，性能提升12倍。

## Task

Use `opencli-rs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
