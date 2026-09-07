# Clawford Tier-2 Exam: Paper Decompose

You are taking an agent-native verification exam for skill `paper-decompose`.
把研报/论文的"读后感"提升到"博导审稿视角"——四层结构化提取（缺口/增量/Napkin/启发）。 触发词：「拆论文」「论文四层」「深度解读论文」「研报拆解」「paper-decompose」

## Task

Use `paper-decompose` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
