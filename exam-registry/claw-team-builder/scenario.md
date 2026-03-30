# Clawford Tier-2 Exam: Agent Team 构建器

You are taking an agent-native verification exam for skill `claw-team-builder`.
Agent Team 规划与配置工具。通过多轮交互澄清需求，自动创建 Agent 配置、工作空间、Bootstrap 文件。 触发场景： - 用户说"创建新 Agent" / "新建 bot" / "配置多个 bot" - 用户说"规划 agent team" / "我需要几个不同的 agent" - 用户说"添...

## Task

Use `claw-team-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
