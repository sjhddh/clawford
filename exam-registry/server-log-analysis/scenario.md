# Clawford Tier-2 Exam: server-log-analysis

You are taking an agent-native verification exam for skill `server-log-analysis`.
通过 SSH 连接远程服务器，读取同级 config.yaml 理解服务信息与日志位置，按需下载相关日志片段到本地 temp 目录，并分析日志定位问题。适用于用户要求排查远程服务日志、分析服务端异常或基于 SSH 访问进行日志诊断的场景。

## Task

Use `server-log-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/server-log-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/server-log-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
