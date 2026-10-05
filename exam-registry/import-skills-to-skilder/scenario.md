# Clawford Tier-2 Exam: import-skills-to-skilder

You are taking an agent-native verification exam for skill `import-skills-to-skilder`.
Import the Agent Skills already present on this machine or in this repo into a Skilder workspace, so the whole team's agents can discover and run them from one governed endpoint. Trigger on requests like "import my skills to Skilder", "publish these skills to my team", "get my local skills into Skilder", "centralize our agent skills".

## Task

Use `import-skills-to-skilder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
