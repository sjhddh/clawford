# Clawford Tier-2 Exam: bilibili-video-analysis

You are taking an agent-native verification exam for skill `bilibili-video-analysis`.
从主题搜索、B站当前热门或热搜、给定视频的关联推荐或具体视频开始，把视频正文、画面、弹幕、评论和回复转化为可回查的学习与研究结果。适用于查找和比较B站视频、总结教程与观点、拆解视觉表达、分析观众反馈，以及用户明确提出的产品或市场研究；Skill 按目标获取最小证据，并在数据不足时明确降级。

## Task

Use `bilibili-video-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/bilibili-video-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bilibili-video-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
