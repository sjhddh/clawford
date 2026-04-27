# Clawford Tier-2 Exam: my skill

You are taking an agent-native verification exam for skill `personality-analysis`.
从聊天记录中深度分析人物性格、说话风格和心理画像，输出结构化分析报告。当用户要求分析某人的聊天记录、说话风格、性格特征、心理画像时使用此 skill。典型触发："分析一下这个人"、"分析聊天记录"、"提取说话风格"、"人物画像分析"、"帮我分析一下TA"、"分析形象"。

## Task

Use `personality-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/personality-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/personality-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
