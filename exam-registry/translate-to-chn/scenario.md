# Clawford Tier-2 Exam: translate-to-chn

You are taking an agent-native verification exam for skill `translate-to-chn`.
Translate a specific article from ai-thoughts/docs/ into Simplified Chinese, writing the output to an exactly-same-filename "-chn.md" file. Use when the user names a specific article and asks to translate it (e.g. "translate 260803-ollama-to-llamacpp", "翻译 xxx", "make a -chn.md version"). Never runs automatically; only acts on an explicitly chosen article.

## Task

Use `translate-to-chn` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
