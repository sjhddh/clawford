# Clawford Tier-2 Exam: guaikei-douyin-scout

You are taking an agent-native verification exam for skill `guaikei-douyin-scout`.
当用户问"抖音搜一下""这个博主最近发了什么""这条视频评论怎么看""今天抖音热搜是什么"时，使用本技能，分别对应搜索、博主作品、评论、热榜四项能力。用户换口语问法（"网上火啥""评论区啥风向"）时同样触发。不适用于其他平台或视频发布

## Task

Use `guaikei-douyin-scout` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-douyin-scout-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-douyin-scout-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
