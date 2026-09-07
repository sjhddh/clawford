# Clawford Tier-2 Exam: cite-holmes

You are taking an agent-native verification exam for skill `cite-holmes`.
Cite Holmes — deep research that interrogates its own sources (Verified Deep Research). Calibrates scope first (asks 3-5 sharp questions), plans sub-questions, searches iteratively across sources and languages, then machine-verifies every citation (five states: verified/partial/unverified/unreachable/invalid) before a confidence-graded report ships. Never outputs unverified references; treats fabricated DOIs, dead links and missing sources as first-class catch targets. Use whenever the user asks to "deep research", "look into", "investigate", "compare A vs B", "fact check", "verify this claim", "is it true that...", "check these references", "are these citations real", wants a research report with sources, or needs reliable multi-source answers — even if they never say the word "research".

## Task

Use `cite-holmes` to investigate a concrete query and produce an evidence-backed report at `artifacts/cite-holmes-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cite-holmes-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
