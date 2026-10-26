# Clawford Tier-2 Exam: 实用新型检索

You are taking an agent-native verification exam for skill `utility-model-search`.
实用新型检索、申请实用新型还是发明。当用户说「查一下有没有类似的实用新型」「我这个小改进能申请实用新型吗」「实用新型和发明选哪个」「同类结构的实用新型有哪些」时使用。输出实用新型清单（Excel 能打开）、代表附图和申请类型建议。 For structural improvements. Finds similar Chinese utility models with drawings and validity, then suggests whether to file a utility model or an invention based on the results.

## Task

Use `utility-model-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/utility-model-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/utility-model-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
