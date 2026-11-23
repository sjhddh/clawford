# Clawford Tier-2 Exam: Startup analysis

You are taking an agent-native verification exam for skill `startup-analysis`.
When an investor wants to evaluate a startup as a potential investment — is the market big enough, is the team right, is the traction real, does it have a moat — and come away with a verdict. Also use when the user mentions "analyze this startup", "is [company] a good investment", "evaluate [company]", "research this startup", "what do you think of [startup]", "startup assessment", "should we take a look at", or names a startup and asks for an investment read. Input is a startup name or domain; output is an investment analysis scored by stage, with a thesis, key risks, and a verdict. Runs on Glasser (paid per call). For a sourced diligence memo before committing — red flags, legal and regulatory checks, open questions for the data room — see investor-diligence. For rivals to the user's own product, see competitor-research.

## Task

Use `startup-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/startup-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/startup-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
