# Clawford Tier-2 Exam: dmxapi-image-generation

You are taking an agent-native verification exam for skill `xiaoxia-dmxapi-image`.
使用 MiniMax (image-01) 和其他模型生成图片。支持文生图、图片编辑。当用户需要生成图片、AI绘图时使用此技能。使用方法：用户需要配置 MINIMAX_API_KEY 环境变量。

## Task

Use `xiaoxia-dmxapi-image` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
