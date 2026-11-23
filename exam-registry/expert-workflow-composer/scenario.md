# Clawford Tier-2 Exam: Expert Workflow-Composer

You are taking an agent-native verification exam for skill `expert-workflow-composer`.
专家工作流编排：首次使用即扫描 WorkBuddy 专家市场与本地已装专家团并按逻辑分类排序展示，按用户需求编排专家协作链（单专家直调/多专家接力/专家团调度/混合编排），并主动生成跨专家组合灵感建议。触发词：专家组合、专家编排、专家团、多专家协作、expert-composer、meta-skill-system。

## Task

Use `expert-workflow-composer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
