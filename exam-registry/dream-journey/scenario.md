# Clawford Tier-2 Exam: dream-journey(寻梦之旅)

You are taking an agent-native verification exam for skill `dream-journey`.
用户描述模糊或反复出现的梦境场景后，AI 先高清还原梦境、生成视觉描述，然后调用 Fly.ai 实时匹配高度相似的真实目的地，进行端到端行程规划。行中使用拍照讲解'验证梦境'，结束生成《梦成真了》情感报告和短视频。治愈+宿命+冒险感拉满。

## Task

Use `dream-journey` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
