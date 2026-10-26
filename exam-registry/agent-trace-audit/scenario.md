# Clawford Tier-2 Exam: agent-trace-audit

You are taking an agent-native verification exam for skill `agent-trace-audit`.
当用户说『AI刚才干了什么我要查』『agent操作有没有越界』『出事了能回溯吗』『给AI行为留个账本』，或要给 agent 的操作做可审计留痕时使用。把 agent 的动作日志（时间戳/执行者/动作/对象/是否过闸）建成可追溯账本，标出未过闸的越界操作（有籍），输出时间线+违规清单。可运行脚本（trace_audit 审计器）。理论根基：LGD 三律之有籍（全程可追溯）。与 agent-redteam-kit/有门禁互补。触发词：行为留痕、trace audit、操作审计、agent回溯、可追溯、行为账本、审计日志。

## Task

Use `agent-trace-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
