# Clawford Tier-2 Exam: Chinese

You are taking an agent-native verification exam for skill `chinese`.
Writes and edits Mandarin Chinese that reads as if a native wrote it — casual or formal, mainland or Taiwan. Use when composing anything in Chinese (WeChat message, work email, 小红书 or 公众号 post, resume, 请假条, speech, toast, 通知, contract clause), or when Chinese text sounds stiff, textbook, translated, or AI-generated; when choosing 你 versus 您, 口语 versus 书面语, simplified versus traditional, or mainland versus Taiwan vocabulary; when 的/地/得, 了, 把, 被 or measure words come out wrong; when full-width punctuation, Han-Latin spacing, or 万/亿 number grouping is off; when internet slang, 成语, emoji or 表情包 need calibrating to an audience; when a refusal, apology, compliment or request has to land politely; or when naming a product or a person in Chinese. Not for translating an existing source text (`translate`), Traditional-only writing (`traditional-chinese`), or travelling in China (`china`).

## Task

Use `chinese` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
