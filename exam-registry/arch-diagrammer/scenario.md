# Clawford Tier-2 Exam: 用于快速产出**架构图 / 流程图 / 时序图 / 部署图**等可视化交付物，常见输出为 `.svg`（可离线打开）或 `.html`（浏览器直接预览）

You are taking an agent-native verification exam for skill `arch-diagrammer`.
面向架构与流程的专业制图技能。支持两种产出方式：(1) 直接生成高质量 SVG 分层架构图，提供 11+ 种风格（blue/cyber/dark/gray/green/handdrawn/mono/morandi/ocean/orange/purple/tailwind），支持精确布局与中文；(2) 使用 Mer...

## Task

Use `arch-diagrammer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
