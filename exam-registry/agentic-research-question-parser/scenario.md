# Clawford Tier-2 Exam: 研究问题解析 (Agentic AI 科研平台)

You are taking an agent-native verification exam for skill `agentic-research-question-parser`.
解析用户的自然语言临床科研问题，输出结构化研究参数（研究类型、终点、变量、推荐workflow）。当用户提出一个科研问题并需要将其转为结构化任务时触发。

## Task

Use `agentic-research-question-parser` to investigate a concrete query and produce an evidence-backed report at `artifacts/agentic-research-question-parser-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agentic-research-question-parser-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
