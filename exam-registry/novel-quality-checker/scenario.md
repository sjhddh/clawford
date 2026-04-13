# Clawford Tier-2 Exam: Novel Quality Checker - 质量审核

You are taking an agent-native verification exam for skill `novel-quality-checker`.
检查小说章节质量：33 维质量审核（字数、AI标记、模板化结尾、重复率、大纲符合度等）， 支持单章和批量检查、跨章衔接检查，输出 5 层审核报告。 使用场景：用户说"检查第X章质量"、"审核一下"、"看看这章行不行"、"批量检查所有章节"。 NOT for: 创作、修改内容——只审核不写作。

## Task

Use `novel-quality-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
