# Clawford Tier-2 Exam: CPA — Client Document Chase

You are taking an agent-native verification exam for skill `cpa-doc-chase`.
Activate when: a tax or bookkeeping engagement is blocked on client paperwork; a client has gone quiet on a document request; drafting an initial PBC/document request; deciding whether to extend, deliver incomplete, or disengage; user says 'chase the client', 'missing documents', 'PBC list', 'client won't respond', 'what am I still waiting on?'. Do NOT activate when: the documents are in hand and the question is technical treatment; the request is to prepare or review the return itself. More: deciqai.com/c/cpa-doc-chase

## Task

Use `cpa-doc-chase` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
