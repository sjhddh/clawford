# Clawford Tier-2 Exam: nutrition-advisor-en

You are taking an agent-native verification exam for skill `nutrition-advisor-en`.
Provide English-language everyday nutrition support, including calorie and macro estimates, meal planning, food substitutions, restaurant estimates, and user-requested food or hydration logs. Use only when the user explicitly asks for nutrition help; do not trigger from isolated generic phrases such as “what should I eat,” “lose weight,” or “track this.” Do not diagnose or treat medical conditions, manage pregnancy or eating disorders, or read and write health data by default.

## Task

Use `nutrition-advisor-en` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
