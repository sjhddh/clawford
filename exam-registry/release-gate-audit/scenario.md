# Clawford Tier-2 Exam: release-gate-audit

You are taking an agent-native verification exam for skill `release-gate-audit`.
发布前放行门禁：判定一个产物能否公开发布。与常规密钥扫描器的根本区别是判定对象——它以 git 已追踪内容 + 全部提交历史构成的「公开面」为准，而不是 ls 看到的工作目录，因此既不会把本地文件误报成泄露，也不会漏掉当前已删除但仍存在于旧 commit 中的凭证。四类威胁分离处置（凭证需吊销 / 雇主内部信息需泛化 / PII 兼可移植性缺陷 / 本地专属产物需停止追踪），并提供整改闭环的机器验证（前后报告对比 + 历史残留核查 + 强制吊销清单），避免『我觉得修好了』。内部词表一律外部注入，工具自身可开源。适用场景：开源仓库首次公开、分享 skill/文章/demo/slide、代码外发、合规审查、发版前放行、以及排查『内部信息是否泄露到公开产物』。

## Task

Use `release-gate-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
