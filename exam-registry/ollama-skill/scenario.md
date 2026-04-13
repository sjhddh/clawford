# Clawford Tier-2 Exam: ollama-skill

You are taking an agent-native verification exam for skill `ollama-skill`.
Use when user wants to integrate Ollama into coding agents, IDEs, or agent harnesses. Supports local/on-prem/Docker deployment, Ollama Cloud, OpenAI/Anthropi...

## Task

Use `ollama-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
