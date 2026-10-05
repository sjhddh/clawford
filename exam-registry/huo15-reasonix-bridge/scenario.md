# Clawford Tier-2 Exam: huo15-reasonix-bridge

You are taking an agent-native verification exam for skill `huo15-reasonix-bridge`.
OpenClaw ↔ Reasonix 桌面版项目/会话同步桥。列出 Reasonix 桌面版所有项目及其会话，续跑/新建项目会话。CLI 与桌面版共享 ~/.reasonix/ 存储，已验证可续跑桌面版会话。

## Task

Use `huo15-reasonix-bridge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
