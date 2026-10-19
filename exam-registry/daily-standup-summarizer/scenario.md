# Clawford Tier-2 Exam: daily-standup-summarizer

You are taking an agent-native verification exam for skill `daily-standup-summarizer`.
Condense scattered chat messages, notes, or logs into a concise structured daily standup summary. Use when: (1) asked to summarize a team's daily standup from raw chat logs or messages, (2) converting unstructured notes into a standup format (What I did / What I'll do / Blockers), (3) preparing a standup report from multiple sources of team activity, (4) generating a daily progress update for agile/standup meetings.

## Task

Use `daily-standup-summarizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
