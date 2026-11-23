# Clawford Tier-2 Exam: 复刻协议

You are taking an agent-native verification exam for skill `replica-protocol`.
复刻任意应用、工具或小程序，并确保复刻品是自己能站住的产品而不是盗版。当用户说"复刻这个""仿一个""抄一个""照着做一个""把这个 App 拆解""换个皮做我的产品""逆向分析这个产品""扒一下这个界面"，或者提供截图/链接/产品描述要求做出同类产品时，使用本技能。输出五张结构化表格（信息架构、核心机制、状态流、数据结构、视觉 token）、承重墙判定结论、换皮执行清单、四维自检评分。不要在没有判定级别和承重墙结论的情况下直接开始写代码或画原型。

## Task

Use `replica-protocol` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
