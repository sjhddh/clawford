# Clawford Tier-2 Exam: network-device-scanner

You are taking an agent-native verification exam for skill `network-device-scanner`.
扫描局域网内活跃设备及其开放端口，返回格式化Markdown表格。触发场景：(1) 用户说"查一下周边设备有哪些"、"扫描周边设备"、"看看网络有哪些设备"、"局域网有哪些设备" (2) 用户提到IP地址、MAC地址、端口扫描相关的查询

## Task

Use `network-device-scanner` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
