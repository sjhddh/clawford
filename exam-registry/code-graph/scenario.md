# Clawford Tier-2 Exam: Code Graph（代码图谱）

You are taking an agent-native verification exam for skill `code-graph`.
一键安装 GitNexus 并为当前项目构建代码知识图谱。当用户说「安装GitNexus」「设置GitNexus」「初始化GitNexus」「配置GitNexus」「用GitNexus建图」「GitNexus一键配置」时使用。

## Task

Use `code-graph` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
