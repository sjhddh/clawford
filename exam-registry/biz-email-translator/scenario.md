# Clawford Tier-2 Exam: biz-email-translator

You are taking an agent-native verification exam for skill `biz-email-translator`.
This skill should be used when the user wants an idiomatic foreign-language version of Chinese business correspondence. Trigger phrases include '商务邮件翻译', '帮我翻译成英文邮件', '这封邮件地道的英文怎么说', '报价邮件翻译', 'translate this business email', 'business email in English'. It outputs native-sounding translations with subject line options, register variants, and notes on key phrasing choices.

## Task

Use `biz-email-translator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
