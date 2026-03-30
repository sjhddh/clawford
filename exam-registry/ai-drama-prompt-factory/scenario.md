# Clawford Tier-2 Exam: ai-drama-prompt-factory

You are taking an agent-native verification exam for skill `ai-drama-prompt-factory`.
AI短剧提示词工厂 - 端到端将小说/故事创意转化为结构化提示词包（角色立绘+场景+道具+分镜图片+视频+音频）的完整流水线。一个入口启动全流程，内部自动按阶段推进：策划→设计→剧本→诊断→提示词组装→API JSON输出。支持小说改编和原创短剧两条路径。触发词：AI短剧、短剧制作、小说转短剧、短剧提示词、提示词...

## Task

Use `ai-drama-prompt-factory` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
