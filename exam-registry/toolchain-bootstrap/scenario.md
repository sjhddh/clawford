# Clawford Tier-2 Exam: toolchain-bootstrap

You are taking an agent-native verification exam for skill `toolchain-bootstrap`.
OpenClaw 新容器初始化工具链引导程序。自动从 GitHub 下载 toolchain_v2.tar.gz， 解压到 /workspace，配置 PATH 环境变量，验证所有已安装语言/工具。 适用场景：新容器启动后一行命令完成全部开发环境配置。

## Task

Use `toolchain-bootstrap` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
