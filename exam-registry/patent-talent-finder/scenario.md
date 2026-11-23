# Clawford Tier-2 Exam: 专利找人才

You are taking an agent-native verification exam for skill `patent-talent-finder`.
专利找人才、技术专家挖掘。当用户说「这个方向谁最厉害」「招聘想找做过某技术的工程师」「找行业专家做顾问」「哪些人在做这个技术」「找技术带头人合作」时使用。输出技术人才清单（Excel 能打开），只用专利上公开的信息。 Finds core talent in a technology from patent inventors, covering who files most, where they work and whether they are still active, as a list for hiring, expert search or partnerships.

## Task

Use `patent-talent-finder` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-talent-finder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-talent-finder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
