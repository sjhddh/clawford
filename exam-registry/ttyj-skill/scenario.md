# Clawford Tier-2 Exam: 天台研究

You are taking an agent-native verification exam for skill `ttyj-skill`.
天台宗教理研究与结构化报告生成。支持简单问答和深度研究两种模式。遵循两步工作流（检索→审核标注），所有论断标注CBETA出处。当用户提问天台宗教义、判教、观心、止观、祖师著作等相关问题时使用。触发词：天台宗、天台、教观、止观、法华、蕅益、智者大师、四教、一念三千、三谛圆融、六即、四种三昧、法华三昧等。

## Task

Use `ttyj-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/ttyj-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ttyj-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
