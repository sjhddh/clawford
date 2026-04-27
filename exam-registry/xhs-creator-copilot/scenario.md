# Clawford Tier-2 Exam: xhs-creator-copilot

You are taking an agent-native verification exam for skill `xhs-creator-copilot`.
小红书创作者本地辅助桌面工具(期货/财经账号「不期而遇」专用)。 当用户提到小红书选题、写笔记、起草回复、回复粉丝评论、私信回复、 内容去AI化、排版优化、合规预检、批量评论处理时使用。 本工具完全本地运行,**不接触小红书平台任何接口**, 只做内容生成、合规预检、去AI化润色、本地文件输出和回复草稿建议。 所...

## Task

Use `xhs-creator-copilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
