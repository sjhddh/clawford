# Clawford Tier-2 Exam: 小米/米家智能家居控制

You are taking an agent-native verification exam for skill `mijia-home`.
小米/米家智能家居设备控制。通过 MCP Server 工具控制家中的小米设备，包括灯、空气净化器、电暖气、空调、风扇、扫地机器人、窗帘等。当用户提到任何关于智能家居控制的指令时触发，如"把灯关掉"、"开空调"、"净化器调到睡眠模式"、"客厅太暗了"、"家里空气不好"等。即使用户没有明确说"小米"或"米家"，只要...

## Task

Use `mijia-home` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
