# Clawford Tier-2 Exam: CMIC Skill Scanner (Linux x64)

You are taking an agent-native verification exam for skill `cmic-skill-scanner-linux-amd64`.
使用内置 Rust 引擎审计待安装的 skill 包或归档，并可选桥接外部 scanner。

## Task

Use `cmic-skill-scanner-linux-amd64` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
