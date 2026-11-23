# Clawford Tier-2 Exam: email-for-ai-agents

You are taking an agent-native verification exam for skill `email-for-ai-agents`.
Use when an AI agent needs to send one outbound email through Sendmux with human approval, including a status notification or delegated agent send. Trigger when preparing the exact message for approval, executing an approved send, or reconciling an uncertain retry. Use only for a single-message workflow; bulk and batch sends are outside its scope.

## Task

Use `email-for-ai-agents` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
