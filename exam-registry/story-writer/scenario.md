# Clawford Tier-2 Exam: Story Writer

You are taking an agent-native verification exam for skill `story-writer`.
小说创作、角色设计、情节设计(三幕式)、对话生成、世界观构建、续写。Story writing with character design, three-act plot structure, dialogue generation, worldbuilding. Supports bilingual docum...

## Task

Use `story-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
