# Clawford Tier-2 Exam: Resume Optimizer

You are taking an agent-native verification exam for skill `resume-optimizer`.
Professional resume builder with PDF export, ATS optimization, and analysis capabilities. Use when users need to (1) Create new resumes from scratch, (2) Customize/tailor existing resumes for specific roles, (3) Analyze resumes and provide improvement recommendations, (4) Convert resumes to ATS-friendly PDF format. Supports chronological, functional, and combination resume formats.

## Task

Use `resume-optimizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
