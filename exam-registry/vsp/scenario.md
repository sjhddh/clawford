# Clawford Tier-2 Exam: Verified Search Pro

You are taking an agent-native verification exam for skill `vsp`.
可信研究助理，调用多引擎搜索进行资料搜集，降噪过滤，交叉验证，生成结构化的可信Markdown报告与证据包。

## Task

Use `vsp` to investigate a concrete query and produce an evidence-backed report at `artifacts/vsp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vsp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
