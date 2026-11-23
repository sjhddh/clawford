# Clawford Tier-2 Exam: 专利术语提取

You are taking an agent-native verification exam for skill `patent-term-extraction`.
专利术语提取、技术术语表、缩写表。当用户希望把指定专利或一组原文中的术语、定义和缩写整理成可复用词表时使用；不做整篇翻译。 Extract technical terms, acronyms and source definitions from supplied patent texts, with cited passages and clearly separated suggested translations.

## Task

Use `patent-term-extraction` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
