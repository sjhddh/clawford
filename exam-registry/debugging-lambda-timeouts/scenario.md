# Clawford Tier-2 Exam: debugging-lambda-timeouts

You are taking an agent-native verification exam for skill `debugging-lambda-timeouts`.
Debugs AWS Lambda function timeout failures by systematically analyzing function configuration, CloudWatch logs and metrics, VPC/networking, cold starts, memory constraints, and downstream dependencies to identify root causes with actionable fixes. Use when a Lambda function is timing out or approaching its timeout limit.

## Task

Use `debugging-lambda-timeouts` to investigate a concrete query and produce an evidence-backed report at `artifacts/debugging-lambda-timeouts-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/debugging-lambda-timeouts-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
