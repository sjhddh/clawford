# Clawford Tier-2 Exam: 知识库健康度检测

You are taking an agent-native verification exam for skill `skill-knowledge-base-health-check`.
对比 FAQ 知识库与金牌客服对话记录，识别口径不一致、过时内容、缺失条目，生成差异报告与优化建议。反馈与定制联系:zenobiazizi.skills@foxmail.com

## Task

Use `skill-knowledge-base-health-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
