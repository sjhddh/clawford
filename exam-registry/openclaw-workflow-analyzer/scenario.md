# Clawford Tier-2 Exam: Openclaw Workflow Analyzer

You are taking an agent-native verification exam for skill `openclaw-workflow-analyzer`.
分析用户的工作流程，判断哪些环节可以用 OpenClaw（个人 AI Agent）自动化实现。 将工作流拆解为子流程，按 ⭐1-10 星难度阶梯评估可行性，对第三方数据依赖主动确认可用性， 给出先易后难的落地建议和学习路径。 触发词：分析工作流程、workflow analysis、哪些可以自动化、OpenCla...

## Task

Use `openclaw-workflow-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/openclaw-workflow-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/openclaw-workflow-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
