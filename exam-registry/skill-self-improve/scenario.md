# Clawford Tier-2 Exam: skill-self-improve

You are taking an agent-native verification exam for skill `skill-self-improve`.
给任意 WorkBuddy 技能注入「自进化学习系统」，让它越用越好用、越用越高效。 通过通用 learner.py 记录每次使用的成败与用户偏好，自动复盘并给出改进建议。 一键批量注入：复制学习模块、初始化记忆文件、在 SKILL.md 追加自进化章节。 适用：准备发布或已上线的技能、想加自我迭代能力的任何技能。 触发词：自进化、自我复盘、自动迭代、越用越好用、学习系统、skill 自我改进。

## Task

Use `skill-self-improve` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
