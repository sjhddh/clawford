# Clawford Tier-2 Exam: 视频解说脚本

You are taking an agent-native verification exam for skill `video-script`.
对已完成分析的视频进行导演与剪辑策划，再写带时间戳的中文解说并校验；也处理已有短片的 宣发标题、花字修订和外部文案回填。普通策划输入 work_dir 的 agent_narration_brief.md 与 vlm_analysis.json；文案返修输入当前成片的工程与内容证据。策划输出 recap_story_plan.json、visual_audio_board.json、 可选 style_card.json、cut 模式需要的 clip_plan.json，以及通过校验的 narration.json；仅宣发文案任务交付提案或回填既有包装计划。 外发说明：只有建议型评审 review.py 联网，它把旁白稿全文与理解证据、策划文件的文字摘录发到 MiMo chat 接口 （MIMO_API_KEY / MIMO_API_URL，不发视频、图片或音频）；单独使用时只在显式执行时运行，端到端编排默认在 TTS 前运行一次， 可用 --no-review-narration / REVIEW_NARRATION=0 关闭（严格评审开启时除外）；validate.py 与 lint 仅在本地运行。 触发词：解说词、写解说、视频旁白、宣发标题、花字修订、文案回填、 narration script、写稿、解说文案、剪辑思路、导演思路。

## Task

Use `video-script` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
