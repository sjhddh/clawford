# Clawford Tier-2 Exam: 嘴替 Skill

You are taking an agent-native verification exam for skill `prompt-boost-skill`.
用户提问前置增强层（Universal Query Preprocessor）。所有用户提问都必须先经过本技能处理，再决定后续路径。 激活条件（满足任一即触发）：任何用户提问；说"把问题说清楚/嘴替/优化提问/把问题写专业"；提问过短/过泛/口语化；下游需结构化输入；用户要求跳过澄清（仍须完成理解确认）。 设计目...

## Task

Use `prompt-boost-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/prompt-boost-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/prompt-boost-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
