# Clawford Tier-2 Exam: euthyna

You are taking an agent-native verification exam for skill `euthyna`.
代码安全审计的判定纪律与交付门禁。当用户要求对一段代码、一个 PR、一次变更或一条已有的漏洞结论做安全审查与验证时使用。它做三件事：补上模型算不准的确定性事实（调用方、测试覆盖、git 历史来源），用 6 道门禁判定每条结论真假，拿不出证据的一律降级为「观察」而不是「发现」。不适用于：仅询问某个 CVE 的详情、仅要求跑一次现成扫描器、纯文档或格式化改动、以及用户只要一句快速摘要且明确接受风险时。

## Task

Use `euthyna` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
