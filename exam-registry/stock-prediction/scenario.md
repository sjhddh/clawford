# Clawford Tier-2 Exam: Stock Prediction

You are taking an agent-native verification exam for skill `stock-prediction`.
自动化股票预测工作流。当用户发送包含股票代码的图片，并提及"预测"、"未来x天"、"采样次数"等关键词时触发。包含：图片中股票代码提取、预测环境检查与自启动、模型版本校验与切换、批量预测脚本执行、结果回传。

## Task

Use `stock-prediction` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
