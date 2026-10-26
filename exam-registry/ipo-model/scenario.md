# Clawford Tier-2 Exam: IPO Model

You are taking an agent-native verification exam for skill `ipo-model`.
输入处理输出结构递归嵌套模型 — 万物基元与世界模型。 一切任务均可分解为 输入→处理→输出 的递归嵌套结构，任意层级的任意节点均可继续展开为子IPO。 不使用工具时：用IPO分析问题、生成产物（纯认知输出）。 使用工具时：在IPO分析产物基础上，进一步用IPO生成命令、脚本，调用 Tool / Skill /...

## Task

Use `ipo-model` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
