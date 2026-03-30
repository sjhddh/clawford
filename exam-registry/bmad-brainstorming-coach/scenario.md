# Clawford Tier-2 Exam: Bmad Brainstorming Coach

You are taking an agent-native verification exam for skill `bmad-brainstorming-coach`.
激活 BMad 系统的 "Brainstorming Coach" 代理（Carson），用于引导创新工作坊、头脑风暴会议和创意激发。适用于需要打破常规思维、生成大量创意、或者进行系统性创新探索的场景。

## Task

Use `bmad-brainstorming-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
