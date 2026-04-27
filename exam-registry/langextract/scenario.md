# Clawford Tier-2 Exam: Skill

You are taking an agent-native verification exam for skill `langextract`.
Google 出品的 Python 库，用 LLM 从非结构化文本中提取结构化信息，每个提取结果精确对应源文本位置，支持交互式可视化，适配 Gemini/OpenAI/Ollama 等多种模型

## Task

Use `langextract` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
