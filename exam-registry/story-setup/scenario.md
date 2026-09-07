# Clawford Tier-2 Exam: Story Setup

You are taking an agent-native verification exam for skill `story-setup`.
网文写作工具集基础设施部署。将 hooks/rules/agents/CLAUDE.md 等基础设施部署到用户项目目录。 触发方式：/story-setup、「准备写书」「帮我搭一下环境」「配置写作项目」

## Task

Use `story-setup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
