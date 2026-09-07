# Clawford Tier-2 Exam: Action Items

You are taking an agent-native verification exam for skill `action-items`.
Extrai tarefas, prazos e responsáveis de atas, transcrições ou notas de reunião. Gera lista organizada de action items com prioridade e dono.

## Task

Use `action-items` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
