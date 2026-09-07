# Clawford Tier-2 Exam: 詹明明·选题先试水

You are taking an agent-native verification exam for skill `zmm-mvp`.
📐 詹明明·选题先试水 ——选题 MVP 测试技能。碎片输入（一句话想法/聊天记录/X 见闻/候选选题）→ 生成发 X 用的纯文字测试内容（篇幅不限，内容需要多长写多长，排版清晰）→ 登记测试管道 → 用真实互动数据决定该题进抖音、扩公众号还是淘汰。验证一个想法只花一条文本，不花一条真视频。 触发方式：/zmm-mvp、/发条测试、/试水、/zmm-测试、「发条推测试」「写个 X 短文」「这个想法先试试水」「值不值得拍一条」 MVP text-testing: turn a fragment into a plain-text X post (length as the idea needs, well formatted) to cheaply validate a topic before it costs a real video. Trigger: /zmm-mvp, "test this idea on X", "write a short post to validate" —— 📐 詹明明 · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `zmm-mvp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
