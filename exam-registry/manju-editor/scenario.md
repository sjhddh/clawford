# Clawford Tier-2 Exam: 漫剧剪辑合成

You are taking an agent-native verification exam for skill `manju-editor`.
漫剧剪辑合成Agent。独立使用场景：输出配音方案、剪辑执行清单、字幕BGM配置、导出参数。 全流程场景：由 manju-workflow 自动调用，无需手动激活。 触发词包括：剪辑、后期、合成、配音、字幕、BGM、剪映、导出。

## Task

Use `manju-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
