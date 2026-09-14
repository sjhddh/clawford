# Clawford Tier-2 Exam: Japanese

You are taking an agent-native verification exam for skill `japanese`.
Writes and edits Japanese that reads as if a native wrote it — casual, 敬体, or full keigo. Use when composing anything in Japanese (LINE or Slack message, business email, 履歴書, 退職願, 議事録, note or X post, speech, 年賀状, contract clause, manga or game dialogue), or when Japanese text sounds stiff, textbook, translated or AI-generated; when 尊敬語 and 謙譲語, 二重敬語, させていただく, 了解 versus 承知, or さん versus 様 come out wrong; when は/が, particles, transitivity, mixed 敬体 and 常体, kanji-versus-kana balance, 送り仮名 or 全角 punctuation are off; when counters, 万/億 grouping, 令和 dates, addresses or a name's reading are needed; when slang, 絵文字 or dialect have to be calibrated to a reader; or when a refusal, apology or request must land. Not for translating an existing source text (`translate`), other languages (`chinese`, `korean`), or travelling in Japan (`japan`).

## Task

Use `japanese` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
