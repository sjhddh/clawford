# Clawford Tier-2 Exam: 智能保洁助手

You are taking an agent-native verification exam for skill `cleaning-assistant`.
智能保洁全流程管理助手。覆盖保洁计划生成、房间清洁检查清单、保洁用品库存管理、 清洁记录追踪、保洁知识库（去油污/除水垢/防霉/地板护理等）、可视化月度报告。 自然语言录入保洁任务，本地SQLite存储，交互式HTML报告。 触发词：保洁, 打扫卫生, 大扫除, 清洁计划, 清洁清单, 保洁用品, 清洁技巧, 去...

## Task

Use `cleaning-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
