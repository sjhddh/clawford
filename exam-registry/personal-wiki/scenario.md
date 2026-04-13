# Clawford Tier-2 Exam: Personal Wiki

You are taking an agent-native verification exam for skill `personal-wiki`.
个人知识库（LLM Wiki）操作 skill。 当用户提到以下意图时触发： - Ingest：处理新内容、更新知识库、"处理IMA新内容"、"处理印象笔记"、"处理raw里的文件"、"帮我ingest" - Query：查 wiki、"wiki里有没有关于XX"、"从知识库里找XX" - Lint：整理wiki...

## Task

Use `personal-wiki` to investigate a concrete query and produce an evidence-backed report at `artifacts/personal-wiki-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/personal-wiki-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
