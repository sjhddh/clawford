# Clawford Tier-2 Exam: pretext

You are taking an agent-native verification exam for skill `pretext-text-measurement`.
精准文本测量与布局引擎（基于开源 Pretext）。无需触碰 DOM，纯算术计算文本像素高度，支持中文、CJK、emoji 等多语言。多用于前端虚拟滚动、AI 生成 UI 布局预计算、Canvas 渲染等场景。当用户需要计算文字在指定宽度下的高度、判断换行行数、或精确布局文本时调用此 Skill。

## Task

Use `pretext-text-measurement` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
