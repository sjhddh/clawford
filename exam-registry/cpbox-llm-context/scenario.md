# Clawford Tier-2 Exam: cpbox-llm-context

You are taking an agent-native verification exam for skill `cpbox-llm-context`.
USE FOR RAG/LLM grounding. Returns pre-extracted web content (text, tables, code) optimized for LLMs. GET + POST. Adjust max_tokens/count based on complexity...

## Task

Use `cpbox-llm-context` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
