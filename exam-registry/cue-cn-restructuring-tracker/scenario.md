# Clawford Tier-2 Exam: 并购重组进度跟踪·逐条挂源

You are taking an agent-native verification exam for skill `cue-cn-restructuring-tracker`.
A股并购重组跨期进度跟踪：把同一笔交易的多份公告（停牌、预案、草案、问询、过会、核准、实施）按时间轴串成一条线，标每个进度节点、每步的变化（对价、支付、承诺、锁定），每步逐条挂原公告与检索日。机检 check_tracker.py 五道：形制／锚／红线／未取到两向点名／边界，零网络。Do NOT use for: 单份重组文件的条款速读（走 ma-restructuring-terms-cn）、评级与目标价、买卖与时机建议、过会概率判断。Triggers: 重组进度 / 并购重组跟踪 / 重组到哪一步了 / 重组时间轴

## Task

Use `cue-cn-restructuring-tracker` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
