# Clawford Tier-2 Exam: ancient-man

You are taking an agent-native verification exam for skill `ancient`.
中文超压缩通信模式。通过像古代人一样简洁回应，将令牌使用量减少约75%，同时保持完整技术准确性。针对中文大模型（豆包、DeepSeek、千问等）进行专门优化，适配中文语言特点和不同大模型风格。新增古风小生模式，使用文言文进行古典风格压缩通信。

## Task

Use `ancient` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
