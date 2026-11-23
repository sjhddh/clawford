# Clawford Tier-2 Exam: 简历诊断与成品导出·元简 yotta-resume

You are taking an agent-native verification exam for skill `yotta-resume`.
元简 — 本地求职者简历诊断、单轮模拟面试与成品导出技能：分析简历结构、经历证据、量化指标、岗位匹配和风险，向用户追问缺失事实，给出逐条合理化修改建议，并运行由简历证据、JD 缺口和来源题库共同驱动的模拟面试与复盘，把确认后的内容导出为 DOCX/PDF。触发：简历诊断、改简历、简历追问、JD匹配、模拟面试、面试复盘、导出Word/PDF。边界：不编造经历，不承诺ATS、面试或Offer结果；不自动投递；不处理复杂设计作品集排版；默认本地处理且不联网。

## Task

Use `yotta-resume` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
