# Clawford Tier-2 Exam: deepresearch conversation

You are taking an agent-native verification exam for skill `deepresearch-conversation`.
Deep ReSearch Conversation is provided by Baidu for multi-round streaming conversations with "Deep Research" agents. "In-depth research" is a long-process task involving multi-step reasoning and execution, which is different from the ordinary "question-and-answer". A dialogue that requires the user to repeatedly verify and correct it until a satisfactory answer is reached.

## Task

Use `deepresearch-conversation` to investigate a concrete query and produce an evidence-backed report at `artifacts/deepresearch-conversation-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deepresearch-conversation-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
