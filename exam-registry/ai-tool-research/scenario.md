# Clawford Tier-2 Exam: ai-tool-research

You are taking an agent-native verification exam for skill `ai-tool-research`.
Researches how people are using an AI tool (Claude Desktop, Cursor, OpenAI Codex, Google Gemini, or OpenClaw) and generates a Productivity Playbook plus a Sk...

## Task

Use `ai-tool-research` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
