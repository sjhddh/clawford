# Clawford Tier-2 Exam: 视频生成 快马 Happyhorse 1.0

You are taking an agent-native verification exam for skill `dlazy-happyhorse-1-0`.
Happy Horse 1.0 video model — one model covers text-to-video (t2v), first-frame-to-video (i2v), reference-to-video (r2v), and video editing (edit). The selected mode is automatically routed to the matching sub-model. Happy Horse 1.0 视频模型，一站式覆盖文生视频（t2v）、首帧生视频（i2v）、参考图生视频（r2v）与视频编辑（edit）：根据所选模式自动路由到对应子模型。

## Task

Use `dlazy-happyhorse-1-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
