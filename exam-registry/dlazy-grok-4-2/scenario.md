# Clawford Tier-2 Exam: 文本生成 Grok 4.2

You are taking an agent-native verification exam for skill `dlazy-grok-4-2`.
Efficient text generation, dialogue QA, and logical reasoning using Grok 4.2 text model. 使用 Grok 4.2 文本大模型，进行高效的文本生成、对话问答与逻辑推理。

## Task

Use `dlazy-grok-4-2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
