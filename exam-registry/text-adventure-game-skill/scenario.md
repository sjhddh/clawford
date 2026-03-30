# Clawford Tier-2 Exam: 龙虾文游系统

You are taking an agent-native verification exam for skill `text-adventure-game-skill`.
智能文字游戏生成系统，支持自定义剧本，自由互动剧情，精美文字排版

## Task

Use `text-adventure-game-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
