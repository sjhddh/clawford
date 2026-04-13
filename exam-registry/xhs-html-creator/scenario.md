# Clawford Tier-2 Exam: Xhs Html Creator

You are taking an agent-native verification exam for skill `xhs-html-creator`.
小红书图文创作技能。触发条件：用户说"生成图文"、"创作内容"、"做图文矩阵"、"生成XX的图文"时使用。功能：读取素材库 → 生成7张竖屏小红书图文 → AI专家两轮review迭代 → 用户最终确认交付。

## Task

Use `xhs-html-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
