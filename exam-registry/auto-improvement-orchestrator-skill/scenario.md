# Clawford Tier-2 Exam: Auto Improvement Orchestrator Skill

You are taking an agent-native verification exam for skill `auto-improvement-orchestrator-skill`.
Skill 自动评估和改进管线。9 维结构评分（含 LLM-as-Judge）、4 角色加权、 类别修正系数（tool/knowledge/orchestration/rule）、Pareto front 回归保护 （security 2%/efficiency 10%/其他 5%）、trace-aware 失败...

## Task

Use `auto-improvement-orchestrator-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
