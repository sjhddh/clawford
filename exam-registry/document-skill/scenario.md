# Clawford Tier-2 Exam: Official Document Skill

You are taking an agent-native verification exam for skill `document-skill`.
一个面向公文写作的skill，基于数百篇《人民日报》等报刊文章总结而来。根据文种、场景和材料，生成结构规范、表达稳妥、内容具体、去 AI 味的公文。

## Task

Use `document-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
