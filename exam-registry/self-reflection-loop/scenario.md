# Clawford Tier-2 Exam: self-reflection-loop

You are taking an agent-native verification exam for skill `self-reflection-loop`.
自我反思闭环引擎（超越性元能力）。实现 Reflexion 式「生成→评估→精炼」闭环：对产物做结构化自评 + 工具锚定校验（代码编译/字数/关键词/正则），输出分数、缺口与整改清单，并把教训回灌下一轮生成，直到达标或达上限。 当用户/agent 需要「自我纠错」「迭代精炼」「代码自验证」「质量门禁」时调用。

## Task

Use `self-reflection-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
