# Clawford Tier-2 Exam: DIBP Topic 聚类

You are taking an agent-native verification exam for skill `dibp-topic-clustering`.
Use when the user asks to (re)cluster DIBP topic data into 需求簇/用户主动洞察, regenerate clusters.json, review the long-tail (未分类) topics, add a new theme to the taxonomy, or push cluster results to the dev/prod backend. Covers the offline batch pipeline in scripts/cluster-*.mjs — this is NOT the daily incremental Hive job described in docs/features/dibp-insight-daily-clustering.md, which is unimplemented.

## Task

Use `dibp-topic-clustering` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
