# Clawford Tier-2 Exam: Improvement Executor

You are taking an agent-native verification exam for skill `auto-improvement-executor`.
当需要把已批准的改进候选应用到目标文件、回滚之前的变更、或预览变更效果时使用。支持 4 种 action（append/replace/insert_before/update_yaml），每次变更前自动备份。不用于打分（用 improvement-discriminator）或门禁验证（用 improvemen...

## Task

Use `auto-improvement-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
