# Clawford Tier-2 Exam: Taplio LinkedIn Engagement Tracker

You are taking an agent-native verification exam for skill `taplio-linkedin-engagement-tracker`.
Audit the user's LinkedIn commenting activity from the Taplio comment queue and history : what is still in draft, what is pending, what posted, what failed and why, how many comments and replies went out per day, and whether the commenting days line up with profile views and follower growth. Returns a status board, the fix for each failure, and 3 adjustments for next week. Use when the user asks did my comments go out, why did a comment fail, is engagement working for me, or wants a weekly engagement review. Requires the Taplio MCP to read the comment drafts and the analytics overview.

## Task

Use `taplio-linkedin-engagement-tracker` to investigate a concrete query and produce an evidence-backed report at `artifacts/taplio-linkedin-engagement-tracker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/taplio-linkedin-engagement-tracker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
