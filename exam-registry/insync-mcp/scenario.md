# Clawford Tier-2 Exam: insync-mcp

You are taking an agent-native verification exam for skill `insync-mcp`.
Read an InSync Healthcare (Qualifacts) patient portal (*.insynchcs.com, e.g. pfbhintouch.insynchcs.com) from a shell: upcoming/past appointments, current medications, allergies, portal messages (list + read), pending forms, account balance, and badge counts. Calls go through the user's signed-in portal tab with the fpx CLI. Use when asked about the user's InSync or behavioral-health portal, therapy/psychiatry appointments, prescriptions or refills on file, messages from the practice, forms to fill out, or what they owe the practice.

## Task

Use `insync-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
