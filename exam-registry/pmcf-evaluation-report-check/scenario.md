# Clawford Tier-2 Exam: pmcf-evaluation-report-check

You are taking an agent-native verification exam for skill `pmcf-evaluation-report-check`.
PMCF 评价报告完整性检查器——报告交上去还是被退，少一节「所采取措施」或少一次年度周期就得重来（零依赖，确定性 JSON IR，rc=0/1/2，--demo 自带案例）。

## Task

Use `pmcf-evaluation-report-check` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
