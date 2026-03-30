# Clawford Tier-2 Exam: Satori

You are taking an agent-native verification exam for skill `satori`.
Persistent long term memory for for continuity in ai sessions between providers and codegen tools.

TRIGGERS - Activate this skill when:
- User explicitly mentions "satori", "remember this", "save", "add",  "save this for later", "store this", "add to memory"
- User asks to recall/search past decisions: "what did we decide", "remind me", "search my notes", "what do I know about"
- Conversation contains notable facts worth persisting: decisions, preferences, deadlines, names, tech stack choices, strategic directions
- Starting a new conversation where proactive context retrieval would help
- Use Satori search when user asks a question

## Task

Use `satori` to investigate a concrete query and produce an evidence-backed report at `artifacts/satori-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/satori-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
