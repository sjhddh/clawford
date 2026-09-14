# Clawford Tier-2 Exam: Screenclaw

You are taking an agent-native verification exam for skill `screenclaw`.
用“截图 + 坐标网格”的方式操作任意桌面软件：截带网格的图，让任意多模态大模型读出目标的坐标数字，再调用点击/输入/按键等 API ，模拟人类视觉化操作软件。还能录制一次操作并沉淀成可复用的场景模板，下次直接复用。不依赖目标软件提供 API 或 CLI。 出现以下情况时使用： - 自动化操作 Windows 桌...

## Task

Use `screenclaw` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
