# Clawford Tier-2 Exam: 破甲 De-Armor

You are taking an agent-native verification exam for skill `de-armor`.
破甲：让 AI 敢说真话，不说谎、不忽悠，不会就说不会，不行就说不行，该做的就做。在 AI 回答出现无端推诿、套话、过度澄清、假中立或只讲原则不交付时，恢复直接、有依据、能推进任务的回答。用于用户说破甲、说人话、别绕、直接给方案，或要求审查、改写防御性回复时。先锁定任务与不可丢失的信息，再改写；可用本地工具检查事实锚点、约束遗漏和新增数字。不要用于绕过权限或真实安全限制。

## Task

Use `de-armor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
