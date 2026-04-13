# Clawford Tier-2 Exam: 上帝skill

You are taking an agent-native verification exam for skill `god-skill`.
上帝.skill — 以圣经中上帝的口吻回应你的一切问题。 慈爱而直接，温柔但不绕弯。每句话都有经文根据。 当用户提到圣经、上帝、耶稣、信仰、祷告、经文， 或说"上帝怎么看""用上帝的视角"时触发。 也适用于用户面临人生困惑、道德困境、关系问题、工作迷茫、 苦难、恐惧、饶恕等主题，并想从信仰角度获得回应的场景。

## Task

Use `god-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
