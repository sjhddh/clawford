# Clawford Tier-2 Exam: Nonsense Literature Crafter

You are taking an agent-native verification exam for skill `nonsense-literature-crafter`.
废话文学生成器。将用户输入的任意普通话语，通过同义反复、因果倒置、循环论证、无效修饰等手法，重构成一段"听君一席话，如听一席话"的废话文学。触发条件：用户直接发送任意一句想被转换的文本，或发送"来句废话"、"废话生成"、"帮我废话一下"、"用废话文学方式说"等类似指令。当用户意图是将某句话变成废话文学风格时使用此技能。

## Task

Use `nonsense-literature-crafter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
