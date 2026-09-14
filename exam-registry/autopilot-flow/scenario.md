# Clawford Tier-2 Exam: 自动驾驶流程

You are taking an agent-native verification exam for skill `autopilot-flow`.
自动驾驶流程是把重复任务自动化的端到端能力包。它不停留在抽象的"识别→抽象→自动化" 口号，而是把六步法每步都具象化为可执行动作，并补齐原版缺失的错误处理、监控、 文档化环节。 核心能力： - 六步具象化：观察（日志法）、抽象（模式提取）、设计（流程图）、实现（脚本/配置）、 测试（dry-run）、优化（迭代指...

## Task

Use `autopilot-flow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
