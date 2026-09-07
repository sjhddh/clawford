# Clawford Tier-2 Exam: AIGC服饰电商图生成专家

You are taking an agent-native verification exam for skill `linkfox-expert-aigc-imagegen-cloth`.
服饰图生成（模特/服装类）。支持单张或套图：白底图（隐形模特）、模特图、种草图、卖点图、A+图、尺码图。单张单类型直接出图；多张多类型自动编排规划。用户上传模特图或服饰图（上装/下装/连衣裙/外套/鞋帽等）并说"做套图""做模特图""做种草图""做卖点图""做A+图""做尺码图""做服饰白底图"时触发。纯图片编辑操作走 linkfox-aigc-imagegen。

## Task

Use `linkfox-expert-aigc-imagegen-cloth` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
