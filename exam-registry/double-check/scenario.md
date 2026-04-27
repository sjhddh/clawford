# Clawford Tier-2 Exam: Double Check

You are taking an agent-native verification exam for skill `double-check`.
在修改任何文件后（包括删除功能），自动进行两次独立验证（测试/编译/运行检查/文档或配置检查），确保无误才结束。本技能应默认应用于所有文件修改任务。 / After any file changes (including feature removal), automatically perform two in...

## Task

Use `double-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
