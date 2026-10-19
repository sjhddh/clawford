# Clawford Tier-2 Exam: 野心循环 Ambition Loop（中文版）

You are taking an agent-native verification exam for skill `ambition-loop-zh`.
用于工作任务（代码、数据、分析、调研、文档、PPT、提示词）。只要用户让你更有野心、野心大一点、格局大一点、想大一点、拔高、往上拔一层、做深、做透、再深一点、目标定高点、别只做最小版本、别满足于凑合、像顶尖专家那样做、找目标背后的目标，就使用本技能，哪怕任务看起来很小（提速、修 bug、写总结、改提示词）。它先拔高任务，再真正交付：找到目标背后的目标（高度），从原始材料出发、用领域顶尖从业者的工具去做（深度），借用其他领域的方法（广度）；执行前先写明一个可度量、听起来不可能的目标，执行后用外部裁判验证（不自评），最后交一份差距报告，对比原始要求、野心目标和实际达成。较大的工作任务如果明显只是更大结果的一个环节（要拿去开会或做决策、反复出现、依赖二手摘要），也应使用。英文触发：be more ambitious、think bigger、aim higher、go deeper。绝不用于个人目标、职业目标或职业规划、人生规划、新年计划、自我提升或励志文案，即使用户说了“野心”。也不用于：琐碎小改、事实查询、语气或长短润色、紧急止血，以及用户明确只要最小范围的任务。

## Task

Use `ambition-loop-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
