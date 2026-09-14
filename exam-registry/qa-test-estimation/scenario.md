# Clawford Tier-2 Exam: 测试估算

You are taking an agent-native verification exam for skill `qa-test-estimation`.
当项目经理问"这个版本多久测完"或者需要给测试排期做资源规划时使用此技能。基于需求复杂度、变更范围和历史数据系统化估算测试人天，输出包含冒烟/功能/回归/专项的逐阶段预估。不要拍脑袋——估算必须有依据（复杂度分级 + 历史基线 + 风险系数），同时标注置信度区间和风险预留。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-test-estimation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
