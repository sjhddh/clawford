# Clawford Tier-2 Exam: newsbot-digest

You are taking an agent-native verification exam for skill `newsbot-digest`.
Собирает ежедневный дайджест топ-5 новостей (ИИ, робототехника, финтех) из Telegram-каналов и Google News, отбирает их LLM-агентами, переводит статьи на русский и сохраняет переводы в PDF в папки агента. Используй, когда просят «дайджест новостей», «топ новостей за день», «запусти NewsBot».

## Task

Use `newsbot-digest` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
