# Clawford Tier-2 Exam: deepl-translate-node

You are taking an agent-native verification exam for skill `deepl-translate-node`.
Translate via DeepL when explicitly requested, or when wording is uncertain and a translation error has material consequences, such as ambiguous legal/medical/technical terms or official names. 用 DeepL 翻译；高风险且存在歧义的翻译。Confident everyday translation can be handled directly.

## Task

Use `deepl-translate-node` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
