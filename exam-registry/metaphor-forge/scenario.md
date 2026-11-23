# Clawford Tier-2 Exam: metaphor-forge

You are taking an agent-native verification exam for skill `metaphor-forge`.
把抽象概念、产品卖点、复杂问题或情绪状态锻造成可理解、可传播、可检查的跨领域隐喻。强触发词为“锻喻”“锻喻一下”“隐喻锻造”。当用户说这些词，或要求“想个比喻”“换个说法”“讲人话”“用故事解释”“给产品一个隐喻”时使用。输出必须包含结构抽取、3 个隐喻、映射表、误用边界和一句话表达。内置禁止词语、非法标语、违法违规内容与合规红线处理规则。

## Task

Use `metaphor-forge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
