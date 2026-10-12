# Clawford Tier-2 Exam: PDD Shop Report

You are taking an agent-native verification exam for skill `pdd-shop-report`.
Generates business-grade HTML dashboards for Pinduoduo shops - single-shop report or multi-shop cockpit - from data synced by pdd-sync-shop. Use when the user asks for a PDD shop report or operations overview. 基于 pdd-sync-shop 同步的数据生成商务版经营报表（KPI、趋势、库存健康、待办清单）与店群驾驶舱；用户要看报表、经营情况时使用。

## Task

Use `pdd-shop-report` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
