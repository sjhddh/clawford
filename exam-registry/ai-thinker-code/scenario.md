# Clawford Tier-2 Exam: Ai-Thinker-Coder

You are taking an agent-native verification exam for skill `ai-thinker-code`.
安信可科技物联网模组开发助手 - 覆盖 WiFi、BLE、LoRa、Radar、NB-IoT、星闪等全系列模组的编程指南。子 skill 按芯片型号分组：BL602(Ai-WB2)、BL616/BL618(Ai-M61/M62) 等。使用 /skill Ai-Thinker-Coder-<chip> 加载特定芯片...

## Task

Use `ai-thinker-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
