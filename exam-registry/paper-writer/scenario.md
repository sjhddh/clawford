# Clawford Tier-2 Exam: paper-writer

You are taking an agent-native verification exam for skill `paper-writer`.
Author a NEW, complete, spec-compliant paper (essay/thesis chapter/literature review/课程论文) from a requirement (word-count/citation-style/sections) and/or a topic-选题. Use for "write me a paper on…", "写一篇…的学术论文", "turn a brief into a paper". NOT to proofread/summarize/humanize/fact-check an EXISTING paper (→ siblings).

## Task

Use `paper-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
