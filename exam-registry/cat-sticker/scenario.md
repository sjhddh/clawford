# Clawford Tier-2 Exam: cat-sticker

You are taking an agent-native verification exam for skill `cat-sticker`.
猫猫表情包技能系统。分析输入文本情绪，从 custom_stickers.json 自动匹配对应表情，支持概率/开关/冷却调节指令。

## Task

Use `cat-sticker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
