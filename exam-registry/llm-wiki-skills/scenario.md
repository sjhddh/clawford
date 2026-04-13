# Clawford Tier-2 Exam: LLM-Wiki-skills

You are taking an agent-native verification exam for skill `llm-wiki-skills`.
LLM-powered personal wiki knowledge base system. Use this when user wants to build and maintain a persistent wiki using LLMs following the LLM Wiki pattern (...

## Task

Use `llm-wiki-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
