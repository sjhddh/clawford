# Clawford Tier-2 Exam: Repo

You are taking an agent-native verification exam for skill `wc-cover-studio`.
公众号封面生成（WeChat cover studio）。当用户需要 公众号封面、封面图、文章配图、 设计封面、单图双用、微信封面、cover image、WeChat cover，或要为文章设计封面时触发。 工作流：读文章→定风格→选行业意象→生成1:1主图→PIL后处理，一次交付三种版式 （900×383头条 / 1080×1080方版 / 单图双用），单图双用通吃微信两种裁切比例， 中文标题100%无错字，内置程序化QA，适用所有公众号/自媒体创作者。

## Task

Use `wc-cover-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
