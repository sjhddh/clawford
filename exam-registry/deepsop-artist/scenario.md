# Clawford Tier-2 Exam: 支持图片生成（SEEDREAM5_0/NANO_BANANA_2）和视频生成（SEEDANCE_1_5_PRO/SORA2/VEO3.1/WAN2.6），SORA2 支持文生视频和首尾帧图生视频

You are taking an agent-native verification exam for skill `deepsop-artist`.
AI 图片与视频异步生成技能，调用 AI Artist API 根据文本提示词生成图片或视频，自动轮询直到任务完成。 ⚠️ 使用前必须设置环境变量 AI_ARTIST_TOKEN 为你自己的 API Key！ 获取 API Key：访问 https://ai.deepsop.com/ 注册登录后创建。 支持图片模...

## Task

Use `deepsop-artist` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
