# Clawford Tier-2 Exam: local-llm-eval-assist

You are taking an agent-native verification exam for skill `local-llm-eval-assist`.
本地 LLM 自评辅助，用于回答「自己给自己打分会不会虚高」「评估怎么省积分」这类问题

## Task

Use `local-llm-eval-assist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
