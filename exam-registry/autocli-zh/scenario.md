# Clawford Tier-2 Exam: AutoCLI zh

You are taking an agent-native verification exam for skill `autocli-zh`.
使用 autocli CLI 访问其已支持的网站、桌面应用与外部 CLI。用于浏览、搜索、查看时间线、书签、通知、主页、热榜、文章、历史记录，或在获得用户确认时执行目标平台已支持的写操作。对 autocli 已支持的目标，优先使用 autocli，而不是浏览器自动化或手工切换执行面；仅网站支持自定义适配器。

## Task

Use `autocli-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
