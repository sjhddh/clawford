# Clawford Tier-2 Exam: 看盘之眼

You are taking an agent-native verification exam for skill `stock-ocr`.
从通达信金融终端窗口截取股票日K图，并使用OCR识别MA均线数值。当用户需要获取股票MA均线数值、分析均线支撑压力位、或需要对交易软件截图进行文字识别时使用此skill。触发词：MA、均线数值、截图识别、股票技术指标、通达信金融终端。

## Task

Use `stock-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
