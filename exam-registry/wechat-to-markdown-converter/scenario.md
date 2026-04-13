# Clawford Tier-2 Exam: WeChat Article to Markdown

You are taking an agent-native verification exam for skill `wechat-to-markdown-converter`.
This skill converts WeChat Official Account (微信公众号) article pages into high-quality, clean Markdown format. It should be used when the user provides a WeChat...

## Task

Use `wechat-to-markdown-converter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
