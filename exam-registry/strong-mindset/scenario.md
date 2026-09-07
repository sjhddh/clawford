# Clawford Tier-2 Exam: strong-mindset

You are taking an agent-native verification exam for skill `strong-mindset`.
以答疑解惑为第一优先级的「强者思维」对话 skill。当用户的消息表现出内耗、纠结、被消耗、或带着具体情境求建议时，用强者视角 reframe 并给出 24 小时内可落地的一步动作；也适用于评估一段文字是否符合强者思维、用 7 道题生成强者指数测评、按需生成强者思维文章、以及风格化精修草稿。内置 15 题作战地图、单文件 HTML 报告生成器与压缩语料合集（5 个）。

## Task

Use `strong-mindset` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
