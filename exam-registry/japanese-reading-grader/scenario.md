# Clawford Tier-2 Exam: 日语朗读作业批改模板

You are taking an agent-native verification exam for skill `japanese-reading-grader`.
日语朗读作业批改（教师模式）——面向 A1/A2/B1 (JLPT N5/N4/N3) 日语学习者的朗读音频作业批改工具。ASR+声学粗筛自动检测漏读/语速/停顿；促音/长音/清浊仅输出候选。支持批量批改与归档，满分10分。

## Task

Use `japanese-reading-grader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
