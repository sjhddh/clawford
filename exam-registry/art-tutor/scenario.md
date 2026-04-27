# Clawford Tier-2 Exam: Publish Art Tutor

You are taking an agent-native verification exam for skill `art-tutor`.
艺术学习私人助教。依据用户的学习目标、水平和偏好，从本地艺术知识库中精准推荐学习资源、规划学习路径，并解答技法疑问。当用户说"学画画"、"想学水彩"、"零基础学素描"、"帮我制定学习计划"、"推荐一些艺术书籍"等任何艺术学习相关需求时，触发本技能。

## Task

Use `art-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
