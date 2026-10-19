# Clawford Tier-2 Exam: innovation-radar

You are taking an agent-native verification exam for skill `innovation-radar`.
研发创新点雷达：从研发周报、会议纪要、技术方案、实验记录等材料中， 自动发现潜在创新点，并给出保护建议、价值评分（新颖性潜力×技术完整度） 和后续补充问题。 触发场景： - 用户提交研发周报/项目进展，询问"有没有值得保护的创新点" - 用户粘贴会议纪要，询问"这次会议有哪些技术变化点" - 用户上传技术方案/架构文档，询问"哪些部分可以申请专利" - 用户直接描述一个技术改进，询问"这个算不算创新" - 关键词触发：创新点、专利点、可以申请专利吗、值得保护吗、技术交底

## Task

Use `innovation-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
