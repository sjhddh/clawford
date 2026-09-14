# Clawford Tier-2 Exam: Agent Sdd Bootstrap

You are taking an agent-native verification exam for skill `agent-sdd-bootstrap`.
帮助用户在任意项目中完成 SDD（规范驱动开发）工作流的初始化：安装并校验 OpenSpec CLI、生成项目级 SDD 配置、自动识别项目技术栈并写入上下文，并针对 OpenSpec 原生支持与非原生支持的 Agent CLI 分别完成接入。

## Task

Use `agent-sdd-bootstrap` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
