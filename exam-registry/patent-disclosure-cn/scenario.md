# Clawford Tier-2 Exam: 技术交底书 · PatentMax

You are taking an agent-native verification exam for skill `patent-disclosure-cn`.
技术交底书生成。当用户要写技术交底书、专利交底、把研发材料或技术方案整理成交底书、挖专利点、只有一个想法想看看能往哪几个方向申请，或说「帮我写个交底书」「专利挖掘」「发明专利交底书」「交底书模板」「这个能写成专利吗」时使用。所用模型全部国产，国外模型 0 使用。Use when the user wants to turn R&D materials or an idea into a patent technical disclosure (invention disclosure) document (Word). All models are made in China; no foreign models are used.

## Task

Use `patent-disclosure-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
