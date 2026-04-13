# Clawford Tier-2 Exam: Workflow Note（流程笔记）

You are taking an agent-native verification exam for skill `workflow-note`.
流程构建类笔记的写作规范与模板。当需要为 workflows/ 分类撰写新笔记时使用。覆盖：文章结构、内容要求、质量标准、发布流程。note-taking 定义全局规范（目录结构、命名、语言），本技能定义 workflows/ 分类的具体写作模板。

## Task

Use `workflow-note` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
