# Clawford Tier-2 Exam: XReading

You are taking an agent-native verification exam for skill `xreading`.
将一本书加工成 XReading 卡片：先判断是否值得继续，再讲清核心主张与论证链，提炼可操作规则，快速核查被推翻或争议较大的观点，并回写书单与候选规则。用户输入 /book、书名、本地 PDF/EPUB 路径，或提出“读懂/拆解/提炼/总结一本书并告诉我怎么用”时使用；普通文章摘要、纯文学赏析或只查一个事实时不要使用。

## Task

Use `xreading` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
