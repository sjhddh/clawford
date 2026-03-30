# Clawford Tier-2 Exam: Pic Gen

You are taking an agent-native verification exam for skill `pic-gen`.
AI 图片生成与提示词优化工具。支持通义万相、Banana (Flux)、DALL-E 等多模型。用于：根据用户简单描述生成高质量图片提示词、优化已有提示词、直接调用配置好的模型出图。触发场景：「生成图片」「画一个 XXX」「优化这个提示词」「设置 API key」「切换模型」。用户可直接发送密钥给 bot，自动...

## Task

Use `pic-gen` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
