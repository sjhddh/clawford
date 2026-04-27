# Clawford Tier-2 Exam: 内容引擎

You are taking an agent-native verification exam for skill `qianxun-content-engine`.
内容引擎（小红书）。两种 mode：①拆解（v1）— 输入 XHS 爆款链接，输出 18 维结构化拆解卡；②生成（v2）— 在拆解卡基础上结合品牌信息，用 Ofox（LLM + Nano Banana）生成我方版本的脚本/文案/素材图/封面/标签全套产出。视频生成（Seedance 2.0）规划在 v2.1。同时...

## Task

Use `qianxun-content-engine` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
