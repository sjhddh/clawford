# Clawford Tier-2 Exam: ym-gift-pick-helper

You are taking an agent-native verification exam for skill `ym-gift-pick-helper`.
按收礼人关系、预算、已知偏好与禁忌推荐礼物方案，给出理由与备选，避免泛泛清单，不确定时给出可问清偏好的问题。当用户说「送什么礼物」「选个礼物」「礼物推荐」时使用。 也适用于「选礼物」「送礼建议」「gift ideas」这类说法。

## Task

Use `ym-gift-pick-helper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
