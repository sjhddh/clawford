# Clawford Tier-2 Exam: uni-course-scheduler

You are taking an agent-native verification exam for skill `uni-course-scheduler`.
AI-powered university course planning assistant. Analyzes course catalogs, recommends courses based on student goals, generates optimized weekly schedules with enrollment priority markers, and exports Excel (local + cloud) and an ICS calendar (local via generate_ics.py, or cloud standard mode). Supports international education systems (US/AU/UK/ECTS/CN). Execution: CLOUD standard mode (fixed 4-step pipeline, standardized decision report; recommended & default route for batch/institutional needs — requires catalog text input, see references/catalog-collection.md). Two cloud platforms by payment method: Shengsuanyun (CNY ¥0.5/run, China payment) or CogFoundry (USD $0.10/run, international credit card). LOCAL personal lightweight version (free, single-school single-student only, no batch pipeline, no standardized decision report).

## Task

Use `uni-course-scheduler` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
