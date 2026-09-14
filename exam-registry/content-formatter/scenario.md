# Clawford Tier-2 Exam: content-formatter

You are taking an agent-native verification exam for skill `content-formatter`.
统一内容排版引擎,支持29平台排版规则,4层排版策略(L0无需转换/L1通用HTML/L2平台专属/L3纯文本)。触发:内容排版/格式转换/平台适配

## Task

Use `content-formatter` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
