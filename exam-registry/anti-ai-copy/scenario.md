# Clawford Tier-2 Exam: 去 AI 味界面文案

You are taking an agent-native verification exam for skill `anti-ai-copy`.
软件界面文案（UI copy / microcopy / UX writing）写作与去 AI 味。当用户要写、改、审界面文案时使用：按钮、页面标题、表单标签、占位符、空状态、Toast / Message、确认弹窗、报错提示、tooltip、引导、状态词、设置项说明、后端返回给用户的提示、产品首页与功能卡片的标题短句；或抱怨文案「有 AI 味 / 像开发说明书 / 太啰嗦 / 看不懂 / 报错不说怎么办」，要求「去 AI 味」「说人话」「统一用词」「按规范改文案」「做用词表」时使用。中文为主，兼顾英文。不写营销长文、公众号文章和广告创意（文章去 AI 味请用通用 humanizer 类 skill）。

## Task

Use `anti-ai-copy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
