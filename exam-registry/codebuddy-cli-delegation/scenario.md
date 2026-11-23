# Clawford Tier-2 Exam: codebuddy-cli-delegation

You are taking an agent-native verification exam for skill `codebuddy-cli-delegation`.
把大批量编码任务派给「独立无头 CodeBuddy CLI」执行的标准流程。CodeBuddy CLI 专用（非通用 CLI 技能）：干净环境启动（避免宿主注入环境变量导致 0 字节静默挂死）、指令预算与并行准入（四隔离 + 写集不相交）、模型与参数分配（模型由派发方指定，参数按阶段分配）、独立审计验收（对抗性探针 + 变异对照，不采信 CLI 自述）。含 21 个可用模型清单与厂商档位映射、启动器模板，全部结论基于 CodeBuddy CLI 2.156.0 实测。用于批量改造、批量补测试、批量文档回填、无人值守跑批次等前台会超时的大任务。触发词：用 CLI 派活、让 CLI 干一批、无人值

## Task

Use `codebuddy-cli-delegation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
