# Clawford Tier-2 Exam: make-design-md

You are taking an agent-native verification exam for skill `make-design-md`.
网站设计风格分析器，从网站URL、HTML文件或截图提取设计规范，生成符合 Google design.md 规范的 DESIGN.md 文档。当用户要求"分析设计风格"、"提取设计规范"、"生成设计文档"、"从XX网站提取风格"、"分析这个页面的设计"等任务时触发此skill。也支持用户直接提供URL、HTML...

## Task

Use `make-design-md` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
