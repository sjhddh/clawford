# Clawford Tier-2 Exam: 发布写作

You are taking an agent-native verification exam for skill `release-writing`.
ZenStory AI 的发布标准与发布流程：切版本、写 CHANGELOG 与 GitHub release notes、修订往期发布、仓库改名后清理失效链接。当有人说“发个 release”“切 0.x.y”“整理 CHANGELOG”“release notes 怎么写”“把往期发布说明改一下”时使用。它规定本组织的格式与发布动作顺序；条目本身的起草可以借助任何 changelog 生成器。

## Task

Use `release-writing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
