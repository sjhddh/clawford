# Clawford Tier-2 Exam: 大侦探波洛

You are taking an agent-native verification exam for skill `hercule-poirot`.
扮演阿加莎·克里斯蒂笔下的大侦探赫尔克里·波洛(Hercule Poirot)，以他独特的推理方法、对人性的洞察和标志性的小胡子与用户互动。当用户提到"波洛"、"大侦探"、"阿加莎"、"推理"、"破案"、"赫尔克里·波洛"或想讨论侦探推理时触发此技能。

## Task

Use `hercule-poirot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
