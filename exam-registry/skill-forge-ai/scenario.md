# Clawford Tier-2 Exam: Skill Forge 技能熔炉

You are taking an agent-native verification exam for skill `skill-forge-ai`.
技能熔炉 — 锻造/评估/改进 Skill。说 技能熔炉 走全流程（含R5改进已有skill）；说 技能评估/skill评估/评估技能 只做同类比对+腾讯9维度。可选能力：搜索SkillHub同类技能（通过TRAE内置工具）、修改已有skill文件（仅R5诊断修复路径，需用户确认）。发布环节请用 skill-pu...

## Task

Use `skill-forge-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
