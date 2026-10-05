# Clawford Tier-2 Exam: qa-output-validation

You are taking an agent-native verification exam for skill `qa-output-validation`.
在最终输出前对测试用例做最后一轮防幻觉验证：事实核查（引用的需求ID是否存在）、一致性检查（用例之间是否矛盾）、可执行性验证（步骤是否能实际操作）、来源追溯（每个用例是否能追溯到具体需求）。当测试用例已经生成完毕、准备输出了，但你不确定AI有没有编造不存在的功能或需求时，应当使用此技能。这是整个工作流的最终质量守门——如果验证失败，必须返回问题清单要求修正，不得跳过。 触发场景：验证一下输出、检查有没有幻觉、这个用例对吗、确认一下质量、时。 Use when the user asks about: final anti-hallucination verification of generated test cases — fact checking, cross-case consistency, executability, and requirement traceability.

## Task

Use `qa-output-validation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
