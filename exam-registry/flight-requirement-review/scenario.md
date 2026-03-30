# Clawford Tier-2 Exam: 机票产品需求评审

You are taking an agent-native verification exam for skill `flight-requirement-review`.
机票产品需求评审 Agent。对前端、后端、运营类机票需求文档进行结构化评审打分，含独立的流程图治理评审（去If化、卫语句、决策表、FSM、泳道图、分层建模）。输入需求文档（markdown/图片/HTML），输出分项评分、评语和改进建议。使用场景：用户说"评审需求"、"审需求文档"、"给需求打分"、"需求评审"...

## Task

Use `flight-requirement-review` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
