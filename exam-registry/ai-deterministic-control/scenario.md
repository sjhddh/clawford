# Clawford Tier-2 Exam: AI Deterministic Control

You are taking an agent-native verification exam for skill `ai-deterministic-control`.
AI 确定性控制工具。管理 temperature/top_p/seed 参数，多场景预设，一致性检查（编辑距离+TF-IDF），监控趋势分析与异常检测，模型参数注入与恢复。

## Task

Use `ai-deterministic-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
