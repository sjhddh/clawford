# Clawford Tier-2 Exam: 专利号识别

You are taking an agent-native verification exam for skill `patent-number-extraction`.
专利号识别、从文本提取专利号。当用户要从论文、审查意见或资料文本中摘出专利号码并追溯出处时使用；不把格式识别当作号码真实性核验。 Extract patent-number candidates from supplied text with original spelling, line and column locations, and context; separate publication candidates from Chinese application-number candidates.

## Task

Use `patent-number-extraction` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
