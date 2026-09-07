# Clawford Tier-2 Exam: Chinese Naming Skill

You are taking an agent-native verification exam for skill `chinese-naming-skill`.
Guide users through systematic Chinese baby naming: bazi analysis, classics search, wuxing verification, and multi-dimensional comparison.这不是一个取名生成器，而是一套**取名方法论**——帮你把"给孩子起名字"这件事从"翻字典碰灵感"变成"有章可循、可复现、可对比"的流程。明确父母对名字的期望，取字的典籍范围（可添加模式），八字五行（可以在明确不同流派分歧的前提下选择不同的流派），得出具备美感的名字。

## Task

Use `chinese-naming-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/chinese-naming-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/chinese-naming-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
