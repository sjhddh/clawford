# Clawford Tier-2 Exam: IP Lookup Tool

You are taking an agent-native verification exam for skill `ip-lookup-tool`.
查询当前公网 IP、城市位置（含中文名）和运营商。当用户问“我的 IP 是多少”“我现在的 IP 地址”“我在哪个城市上网”这类问题时使用。优先返回公网出口 IP，而不是局域网 IP。

## Task

Use `ip-lookup-tool` to investigate a concrete query and produce an evidence-backed report at `artifacts/ip-lookup-tool-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ip-lookup-tool-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
