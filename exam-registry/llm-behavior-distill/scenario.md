# Clawford Tier-2 Exam: llm-behavior-distill

You are taking an agent-native verification exam for skill `llm-behavior-distill`.
开源大模型行为蒸馏技能 - 将DeepSeek/Qwen/ChatGLM/Yi/MiniMax/Kimi/Llama/Mistral/Gemma/Phi等15个模型的核心理念蒸馏为可复用智能体行为模块

## Task

Use `llm-behavior-distill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
