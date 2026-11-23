# Clawford Tier-2 Exam: Find skills for the job

You are taking an agent-native verification exam for skill `find-skills-for-the-job`.
Find skills for the job on SkillPicker (https://skillpicker.xyz). Use when the user says "find skills", "find a skill for the job", "find skills by work", "which skill should I install", "有没有 skill", "推荐一个技能", or names a task, role, tool, or agent (Claude, Cursor, Codex) and wants a skill. Do not use it to write a new skill or to decide whether a skill is safe.

## Task

Use `find-skills-for-the-job` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
