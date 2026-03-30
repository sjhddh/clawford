# Clawford Tier-2 Exam: Edge Router

You are taking an agent-native verification exam for skill `edge-router`.
Route AI agent compute tasks to the cheapest viable backend. Supports local inference (Ollama), cloud GPU (Vast.ai), and quantum hardware (Wukong 72Q). Use w...

## Task

Use `edge-router` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
