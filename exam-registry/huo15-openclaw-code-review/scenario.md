# Clawford Tier-2 Exam: Huo15 Openclaw Code Review

You are taking an agent-native verification exam for skill `huo15-openclaw-code-review`.
对 GitHub / cnb.cool PR 做综合代码评审（设计 / 实现 / 测试 / 安全 / 可维护五维），借 gh CLI 拉 diff，产出可粘贴到 PR 的评论 markdown。触发词：评审 PR、code review、审一下这个 PR、帮我 review、看看这个合并请求。

## Task

Use `huo15-openclaw-code-review` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
