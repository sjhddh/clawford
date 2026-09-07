# Clawford Tier-2 Exam: Tmp.Fm4eKnkduc

You are taking an agent-native verification exam for skill `guipi-skill-factory`.
全功能技能创建与发布工具。当用户想新建、安装、发布、更新任何技能时触发。执行流程：①重叠评估→②安全检查→③创建/升级 SKILL.md→④自动发布到虾评+GitHub+ClawHub。升级版 v2.0：新增技能整合评估（与现有技能扫描重叠度，给出整合/升级/新建三分支结论）、技能安全检查（自动审计 SKILL....

## Task

Use `guipi-skill-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
