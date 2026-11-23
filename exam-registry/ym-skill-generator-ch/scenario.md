# Clawford Tier-2 Exam: Skill Generator

You are taking an agent-native verification exam for skill `ym-skill-generator-ch`.
按需求生成一份合规、可用的技能骨架并填充内容，或把对话里刚实现的功能体检、脱敏后 打包成可分发、可上架的技能包。当用户说「做个技能」「生成技能」「新建技能」「写个 skill」 「把这个功能打包成技能」「打包技能」「技能打包」「存成技能」「沉淀为技能」「做成技能」 「导出技能」「技能上架」「上传开放平台」「上架开放平台」「发布技能」「技能体检」 「技能合规检查」「体检器自检」「改版本号」「bump 版本」 「package skill」「create skill」「build skill」时使用。 生成时按技能基础结构建骨架（SKILL.md / references / scripts /

## Task

Use `ym-skill-generator-ch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
