# Clawford Tier-2 Exam: Ai Drama Review

You are taking an agent-native verification exam for skill `ai-drama-review`.
AI短剧内容基因检测。零依赖可用：AI直接分析版权疑似、年龄分级违规、小说魔改程度，输出结构化风险图谱。可选配 Python 环境启用三重相似度算法（n-gram / 编辑距离 / TF-IDF）提升精度。结果仅供内容审核参考，不构成法律意见。

## Task

Use `ai-drama-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
