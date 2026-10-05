# Clawford Tier-2 Exam: ym-fridge-weekly-menu

You are taking an agent-native verification exam for skill `ym-fridge-weekly-menu`.
按现有食材、人数、忌口与厨艺水平排出一周菜单，标注哪些需补购、哪些可批量预处理，并给出替代食材方案。当用户说「冰箱里这些能做什么」「一周菜单」「今天吃什么」时使用。 也适用于「冰箱食材」「菜谱安排」「weekly menu」这类说法。

## Task

Use `ym-fridge-weekly-menu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
