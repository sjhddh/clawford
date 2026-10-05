# Clawford Tier-2 Exam: commit

You are taking an agent-native verification exam for skill `commit`.
在 Git 仓库中分析当前变更，生成符合项目规范的 commit message，自动判断单次提交还是按功能拆分多次提交；正常情况全自动不询问，命中异常规则（不能或无须提交的文件等）才请用户确认。 TRIGGER（中文）："提交一下代码""帮我 commit""这次改动提交了吧""生成 commit message 并提交""/commit""按 fix 提交" "先看看变更别提交""改一下上次的 commit"。 DO NOT TRIGGER：用户只想看变更且未表达提交意图（直接执行 git status/diff 即可）； push、rebase 等远端或历史操作（按普通指令处理并单独确认）；非 Git 仓库环境。

## Task

Use `commit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
