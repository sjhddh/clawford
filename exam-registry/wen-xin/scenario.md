# Clawford Tier-2 Exam: wen-xin

You are taking an agent-native verification exam for skill `wen-xin`.
Meta-skill：每次任务结束或汇报前，**必须**调用此 Skill 进行问心验证，否则不得输出。问心 = 问自己：真的对了吗？适合所有类型任务。不可跳过。

## Task

Use `wen-xin` to investigate a concrete query and produce an evidence-backed report at `artifacts/wen-xin-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wen-xin-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
