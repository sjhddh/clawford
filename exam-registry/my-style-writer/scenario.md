# Clawford Tier-2 Exam: my-style-writer

You are taking an agent-native verification exam for skill `my-style-writer`.
我的风格文章创作——学习并复刻用户的写作 DNA，实现「替身式」文章创作。 此技能应在以下场景触发： (1) 用户要求「分析我的写作风格」「学习我的文章风格」「提炼我的写作DNA」时； (2) 用户要求「用我的风格写一篇文章」「替身写作」「帮我写公众号文章」时； (3) 用户提到「风格文章创作」「我的风格」等关键词时。 核心能力：扫描文章库 → 分析提炼风格特征 → 以用户风格创作 → 套用 HTML 模板输出公众号-ready 文章。

## Task

Use `my-style-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
