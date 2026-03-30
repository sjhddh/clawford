# Clawford Tier-2 Exam: tvs-analyze

You are taking an agent-native verification exam for skill `tvs-analyze`.
用户要求代码分析时，提供项目的结构、依赖关系、主要业务、存在问题等信息，帮助开发者快速了解项目。或用户问一些代码的作用时，寻找相关代码的业务逻辑相关代码，分析并总结其作用和实现细节。

## Task

Use `tvs-analyze` to investigate a concrete query and produce an evidence-backed report at `artifacts/tvs-analyze-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tvs-analyze-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
