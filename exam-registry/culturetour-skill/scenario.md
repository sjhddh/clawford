# Clawford Tier-2 Exam: 文旅素材搜索

You are taking an agent-native verification exam for skill `culturetour-skill`.
指导智能体检索文旅素材（数游神州 data0086.com）并走通「搜索 → 列表 → 预览(HLS/MP4) → 选择/购买 → Mock交易返回 → 视频下载到本地」。搜索请求默认 3条，最多 5 条（pageSize≤5），用户可要求更少；列表用表格展示（颜色徽章状态 + img + video），用户通过...

## Task

Use `culturetour-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
