# Clawford Tier-2 Exam: Ai Assistant

You are taking an agent-native verification exam for skill `ai-assistant`.
长文本推理优化器。针对商业合同、法律备忘录、提案、谈判文本等高风险长文档,提供结构化推理与风险检测. 覆盖六大核心能力:Document Assessment(文档评估,识别目的/受众/决策相关性)、Core Logic Extraction(核心逻辑提取, 区分主张/支撑逻辑/关键假设)、Risk Detect...

## Task

Use `ai-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
