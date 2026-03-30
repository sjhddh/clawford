# Clawford Tier-2 Exam: Cheatsheet Generator

You are taking an agent-native verification exam for skill `cheatsheet-generator`.
速查表生成器。当用户说"生成 XXX 速查表"、"XXX 速查"、"XXX 快速参考"、"XXX 命令大全"时触发，生成结构化的 Markdown 速查表，支持导出保存。

## Task

Use `cheatsheet-generator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
