# Clawford Tier-2 Exam: vx-usage

You are taking an agent-native verification exam for skill `vx-usage`.
Teaches AI agents how to use vx, the universal dev tool manager. Use when the project has vx.toml or .vx/, or when the user mentions vx, tool version management, Git/GitHub operations, or cross-platform setup. vx auto-manages Node.js, Python, Go, Rust, and 142 providers via Starlark DSL provider.star files. Also covers MCP integration patterns and GitHub Actions.

## Task

Use `vx-usage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
