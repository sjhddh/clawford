# Clawford Tier-2 Exam: Code Runner Local

You are taking an agent-native verification exam for skill `code-runner-local`.
Run code snippets in 30+ programming languages including JavaScript, Python, TypeScript, Java, C, C++, Go, Rust, Ruby, PHP, and more. Use when the user wants...

## Task

Use `code-runner-local` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
