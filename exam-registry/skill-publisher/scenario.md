# Clawford Tier-2 Exam: skill-publisher

You are taking an agent-native verification exam for skill `skill-publisher`.
将本地已编写完成的 SKILL.md 技能目录一键发布到多个公开市场（ClawHub、腾讯 SkillHub、 skills.sh、LobeHub、SkillsMP、Agensi、Coze、ClawMart），自动完成格式校验、双语 README、 敏感文件清理、Git 版本打标、串行发布与结果汇总。 当用户要把已经写好的 SKILL.md 同时分发到多个公开市场时使用——即使他们只说 "发布 skill"、"publish to clawhub"、"ship to marketplace"、"一键发布"或"上架 skill"。 不用于：纯本地 skill 管理、未完成 skill 的撰写、单个市场的单独发布指引。

## Task

Use `skill-publisher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
