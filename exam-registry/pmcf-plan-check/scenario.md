# Clawford Tier-2 Exam: pmcf-plan-check

You are taking an agent-native verification exam for skill `pmcf-plan-check`.
PMCF 计划完整性检查器 — PMCF 计划写了一半交上去，公告机构说缺方法缺终点缺统计考量，来回补件三个月（零依赖，确定性输出，rc=0/1/2，--json 机器可读）。

## Task

Use `pmcf-plan-check` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
