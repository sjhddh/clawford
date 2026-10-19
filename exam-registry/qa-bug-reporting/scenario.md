# Clawford Tier-2 Exam: qa-bug-reporting

You are taking an agent-native verification exam for skill `qa-bug-reporting`.
当发现了一个 Bug 需要提交、自己提的 Bug 被开发打回来了、或者团队 Bug 质量参差不齐需要统一规范时使用此技能。一个高质量的 Bug 报告应该让开发看一遍就能复现并定位，不需要来回追问。包含清晰的复现步骤（从环境准备到操作序列到预期/实际结果）、根因推测、影响范围评估和必要附件。 ⚠️ 本技能示例可能调用外部抓包/日志工具，请在受控环境执行。 触发场景：提Bug、写Bug报告、Bug描述、报告格式、复现步骤、加附件、开发打回Bug报告需要改进时。 Use when the user asks about: writing a bug report an engineer can reproduce without asking follow-up questions, or fixing reports that got rejected.

## Task

Use `qa-bug-reporting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
