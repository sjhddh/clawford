# Clawford Tier-2 Exam: Auto Pipeline

You are taking an agent-native verification exam for skill `auto-pipeline`.
技能自动开发流水线（PM辅助工具）。PRD→Plan预审→Review(12维度评分)→修复(≤3轮)→发布的质量保障工具。v1.0定位PM手动调度中心。

## Task

Use `auto-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
