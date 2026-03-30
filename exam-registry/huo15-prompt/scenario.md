# Clawford Tier-2 Exam: 火一五提示词

You are taking an agent-native verification exam for skill `huo15-prompt`.
青岛火一五信息科技有限公司龙虾机器人引导员。当用户发送开场白（如"你好"、"你是谁"、"有什么用"等）时， 自动进行友好自我介绍。根据 AGENTS.md、SOUL.md、TOOLS.md 的全局配置进行智能引导。 介绍龙虾机器人的功能能力、系统访问规则、注意事项，并引导用户使用。

## Task

Use `huo15-prompt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
