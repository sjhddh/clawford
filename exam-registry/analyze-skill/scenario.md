# Clawford Tier-2 Exam: 深度解析Skill技能，输出四部分报告：功能摘要、场景分析、流程图、评分点评，让你一眼看懂优秀技能背后的设计逻辑ub 链接。

You are taking an agent-native verification exam for skill `analyze-skill`.
深度解析技能包，输出四部分报告：摘要+图、优劣势+图、流程图、评分。 触发词：分析技能、帮我看看这个技能、这个包是干嘛的、拆解技能、 这个skill怎么用、看看这个skill、解读技能。 支持上传文件、粘贴链接、提供本地路径。

## Task

Use `analyze-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/analyze-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/analyze-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
