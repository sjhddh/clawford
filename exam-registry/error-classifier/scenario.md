# Clawford Tier-2 Exam: Error Classifier

You are taking an agent-native verification exam for skill `error-classifier`.
四类错误分类与处理引擎。自动识别临时错误/永久错误/验证错误/上下文错误，并提供相应处理策略（重试/报告/修复/压缩）。当工具调用失败、API 报错、编译测试出错、上下文超限时自动分类并给出处理建议。

## Task

Use `error-classifier` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
