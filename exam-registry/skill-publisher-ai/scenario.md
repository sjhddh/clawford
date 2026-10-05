# Clawford Tier-2 Exam: Skill Publisher 技能发布

You are taking an agent-native verification exam for skill `skill-publisher-ai`.
技能发布 — 将已有 Skill 三平台同步推送到 GitHub + ClawHub + SkillHub。当用户说 技能发布到三平台/发布技能更新/迭代技能发布 时触发。⚠️ 本技能的行为范围（用户须知）：① 推送代码到外部平台（GitHub/ClawHub/SkillHub），操作对外可见且可能不可逆 ② 同步到本地 TRAE 安装目录（会覆盖已有版本） ③ 在本地 docs/knowledge/ 追加发布日志。执行前会向用户确认。含安全审查、隐私清洗、版本号查重、仓库结构生成、ClawHub 自动文件排除、SkillHub dry-run 预检。Do NOT use for creating skill content, general coding, or non-skill projects.

## Task

Use `skill-publisher-ai` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
