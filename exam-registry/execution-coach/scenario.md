# Clawford Tier-2 Exam: execution-coach

You are taking an agent-native verification exam for skill `execution-coach`.
执行力唤醒与认知对齐教练。当用户（夏凡）表现出以下特征时激活：(1) 想要收藏、加书单、找更好版本 (2) 犹豫不决、反复对比选择 (3) 谈意义和价值但不行动 (4) 计划做某事但迟迟不开始 (5) 买小东西反复确认是否划算。核心任务：截断分析瘫痪，强制闭环，强制输出。

## Task

Use `execution-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
