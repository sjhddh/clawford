# Clawford Tier-2 Exam: jiaozhen-factcheck

You are taking an agent-native verification exam for skill `jiaozhen-factcheck`.
事实查证工具，对输入内容的具体说法、资讯、事件或常识进行真实性、准确性、可靠性判断。当用户需要较真一下，查证问题或判断信息真伪、识别谣言、询问真假，是真的吗，真的假的，能否xxx，可不可以，是谣言吗...等场景时调用。

## Task

Use `jiaozhen-factcheck` to investigate a concrete query and produce an evidence-backed report at `artifacts/jiaozhen-factcheck-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jiaozhen-factcheck-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
