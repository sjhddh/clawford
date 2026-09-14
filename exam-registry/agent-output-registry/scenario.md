# Clawford Tier-2 Exam: agent-output-registry

You are taking an agent-native verification exam for skill `agent-output-registry`.
当用户要『给 AI 产出溯源 / IP 归属 / 防篡改 / 审计留痕』，或担心『AI 生成内容说不清来源、被改了认不出、权属扯不清』时用。给每条 AI 产出发一张『籍』(户口)：SHA-256 指纹 + 模型/版本/提示哈希 + 时间戳 + 权属，写入本地台账；支持 verify 证完整性、lookup 查归属、report 列全部。这是 LGD-I 有籍的落地执行器——把抽象的『有籍』变成每条产出可查的户口。触发词：AI 产出溯源、AI 内容登记、IP 归属、产出指纹、防篡改、审计留痕、有籍、产出户口。

## Task

Use `agent-output-registry` to investigate a concrete query and produce an evidence-backed report at `artifacts/agent-output-registry-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agent-output-registry-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
