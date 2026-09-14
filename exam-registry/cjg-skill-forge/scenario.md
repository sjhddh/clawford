# Clawford Tier-2 Exam: cjg-skill-forge

You are taking an agent-native verification exam for skill `cjg-skill-forge`.
技能锻造炉 / Skill Forge —— 元技能：**创建、升级、重铸、审计**一个「全球最牛」的 WorkBuddy / AI 技能，并让它越用越强。**锻造**模式：从零打造新技能（带版本反馈环、真实素材覆盖审计、外部标杆对比、自我迭代、生产签批、真机验证）；**审视**模式：10 维加权评分尺，给任何技能（含它自己）打分，判断够不够好；**重铸**模式：审计并整合本机重叠技能、合并同类、整理技能库，给出重铸计划与推荐基座；还能让技能更 AI 易读（清晰化）。当你想"做到最牛"、创建一个 XX 技能、升级我的技能、review this skill、整理技能、合并同类、skill 怎么改、SKILL.md 怎么写、怎么制作一个 AI 技能时，用它。 Meta-skill to forge, upgrade, review, recast and refactor world-class WorkBuddy/AI skills — create a new skill from scratch, score any skill with a 10-dimension rubric, consolidate overlapping skills, and make skills more AI-readable. Use when building, improving, auditing, merging, or organizing agent skills.

## Task

Use `cjg-skill-forge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
