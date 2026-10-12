# Clawford Tier-2 Exam: VC 投前研究与初筛

You are taking an agent-native verification exam for skill `vc-sourcing-screening`.
VC 投前研究与初筛专家。当用户需要针对某个赛道或投资主题生成项目搜寻候选清单，或对某个项目生成四维初筛评分卡（团队/市场/技术/财务，含引用与可回溯出处）时使用。This skill should be used when the user wants a deal-sourcing candidate list for a sector or a screening scorecard for a startup/VC target.

## Task

Use `vc-sourcing-screening` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
