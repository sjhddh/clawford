# Clawford Tier-2 Exam: a

You are taking an agent-native verification exam for skill `aaa`.
AI搜问：人员语义搜索与跨源定位。Use when 按姓名/工号/部门/职责/上下级或手机号线索找人，跨文档/消息/邮件/听记检索，或回溯“我发过/收到过”。完整手机号反查走 dingtalk-contact；找到 userId 后由 contact 补详情。命令前缀：dws aisearch。

## Task

Use `aaa` to investigate a concrete query and produce an evidence-backed report at `artifacts/aaa-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/aaa-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
