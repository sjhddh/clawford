# Clawford Tier-2 Exam: arkcli-resources

You are taking an agent-native verification exam for skill `arkcli-resources`.
arkcli resources 实时控制面查询：列出当前/指定 profile 可见资源及其调用兼容性；把 Endpoint 解析为权威模型、模态与候选工作流。read-only，不写 profile.yaml。用户临时给出 ep-... 但未说明该走 Chat、Understand 还是 Gen 时优先使用。反触发：用户已观察到 Endpoint NotFound，并要判断 ID 是否不完整或仅存在于历史用量时，owning skill 必须是 arkcli-infer-endpoint。

## Task

Use `arkcli-resources` to investigate a concrete query and produce an evidence-backed report at `artifacts/arkcli-resources-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/arkcli-resources-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
