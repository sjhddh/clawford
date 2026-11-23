# Clawford Tier-2 Exam: 搜狗输入法皮肤制作skill

You are taking an agent-native verification exam for skill `sg-input-skinmaker-skill`.
搜狗输入法「热词/热梗皮肤」生成 skill，运行于各种 AI client 应用中（如 workbuddy、Codex、Trae 等）。 当用户上传一张图片，希望「基于这张图做风格化图生图、生成一张皮肤/背景图」时使用。典型触发语：「用这张 图做一张热词皮肤」「把这张图改成 XX 风格做皮肤」「根据这张图生成搜狗输入法皮肤」。该 skill 把预设生图 规范与用户的风格描述（可选）融合后，对用户上传的图片做图生图，最后把生成的图片与「校园AI创意皮肤大赛 互动页面」一并返回给用户，由用户自行打开。

## Task

Use `sg-input-skinmaker-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
