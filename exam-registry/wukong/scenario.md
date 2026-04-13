# Clawford Tier-2 Exam: Wukong — 名人思维蒸馏框架（72变版）

You are taking an agent-native verification exam for skill `wukong`.
名人思维蒸馏与召唤技能。当用户需要用某位名人的思维方式分析问题、制定决策时激活。 触发词：召唤/蒸馏/思维模型/Think Like/像XX一样/XX会怎么做/心智模型/认知框架/决策参考。 支持任意历史人物、商界领袖、科学家、艺术家等。

## Task

Use `wukong` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
