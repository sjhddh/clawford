# Clawford Tier-2 Exam: city-policy-cross-verify-search

You are taking an agent-native verification exam for skill `city-policy-cross-verify-search`.
根据用户输入的城市和年份（默认最新），围绕异地就医备案、异地生育结算、公积金异地贷款、购房资格、车牌摇号与竞价、子女非户籍入学、本科人才落户等 7 个维度，执行多来源政策检索与交叉验证，输出结构化结论，并附带来源网址。

## Task

Use `city-policy-cross-verify-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/city-policy-cross-verify-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/city-policy-cross-verify-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
