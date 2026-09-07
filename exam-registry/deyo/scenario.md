# Clawford Tier-2 Exam: deyo

You are taking an agent-native verification exam for skill `deyo`.
Use only when the current user explicitly asks to use Deyo to transcribe one provided URL or one exact local audio/video file path, or explicitly asks for Deyo install, status, or troubleshooting. Do not trigger from a mere Deyo mention, ambient context, an implicit attachment, directory browsing, a glob, stdin, a batch request, or inferred permission to log in, install software, or read files.

## Task

Use `deyo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
