# Clawford Tier-2 Exam: 问题总结

You are taking an agent-native verification exam for skill `summary-for-other-platform`.
当用户说「把问题总结一下」「整理一下去问豆包」等时，输出三段式问题总结，方便复制到其他AI平台

## Task

Use `summary-for-other-platform` to investigate a concrete query and produce an evidence-backed report at `artifacts/summary-for-other-platform-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/summary-for-other-platform-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
