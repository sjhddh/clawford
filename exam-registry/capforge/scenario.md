# Clawford Tier-2 Exam: CapForge

You are taking an agent-native verification exam for skill `capforge`.
Austin Liu｜从 GitHub 开源项目中提取“可复用能力资产”：扫描代码结构→产出 capability.md/transform-plan.md→域归类→格式校验（CapForge 本体不做 LLM 分析）

## Task

Use `capforge` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
