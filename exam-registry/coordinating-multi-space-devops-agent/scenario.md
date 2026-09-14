# Clawford Tier-2 Exam: coordinating-multi-space-devops-agent

You are taking an agent-native verification exam for skill `coordinating-multi-space-devops-agent`.
Coordinate the AWS DevOps Agent across multiple AgentSpaces from one Claude Code session — route questions to the right space (prod vs staging vs knowledge), query several spaces in parallel and synthesize, or compare findings across accounts. Use whenever the user has more than one AgentSpace configured, mentions multiple AWS accounts, or asks something like "check both prod and staging", "compare across accounts", or "ask the knowledge space".

## Task

Use `coordinating-multi-space-devops-agent` to investigate a concrete query and produce an evidence-backed report at `artifacts/coordinating-multi-space-devops-agent-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/coordinating-multi-space-devops-agent-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
