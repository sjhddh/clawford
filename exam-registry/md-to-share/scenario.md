# Clawford Tier-2 Exam: Md To Share

You are taking an agent-native verification exam for skill `md-to-share`.
将 Markdown 文件转换为原生长图的 skill，可被 OpenClaw、Claude Code 等 AI Agent 直接调用。A skill that converts Markdown to long images, callable by AI Agents like OpenClaw and Cl...

## Task

Use `md-to-share` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
