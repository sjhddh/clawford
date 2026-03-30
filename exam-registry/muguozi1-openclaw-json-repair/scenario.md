# Clawford Tier-2 Exam: Muguozi1 Openclaw Json Repair

You are taking an agent-native verification exam for skill `muguozi1-openclaw-json-repair`.
自动修复格式错误的 JSON（尾随逗号、未引号键、注释等）。当遇到 JSONParseError、SyntaxError 或 malformed_json 时使用。支持字符串和文件修复。

## Task

Use `muguozi1-openclaw-json-repair` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
