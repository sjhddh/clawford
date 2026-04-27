# Clawford Tier-2 Exam: 混子哥风格脚本生成器

You are taking an agent-native verification exam for skill `hunzi-ge-script-generator`.
混子哥风格知识脚本生成器。把枯燥、复杂的知识转化为生动、有趣、视觉化的知识脱口秀脚本，让观众在哈哈大笑中搞懂硬核知识。适合用于历史事件、典故、制度等有信息差可挖、有因果链可串联的主题。

## Task

Use `hunzi-ge-script-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
