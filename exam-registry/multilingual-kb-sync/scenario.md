# Clawford Tier-2 Exam: Multilingual KB Sync

You are taking an agent-native verification exam for skill `multilingual-kb-sync`.
Add new language translations to customer service response templates and sync them across Feishu Wiki, GitHub, and local files. Use when: (1) adding new languages to KB templates, (2) updating multilingual customer service responses, (3) syncing template changes to Feishu Wiki knowledge base, (4) creating GitHub issues to document template updates, (5) running the full multilingual template update pipeline. Triggers on phrases like "add language", "translate template", "sync to wiki", "update customer service templates", "多语言模板", "新增语种", "同步知识库".

## Task

Use `multilingual-kb-sync` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
