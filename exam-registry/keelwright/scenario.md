# Clawford Tier-2 Exam: keelwright

You are taking an agent-native verification exam for skill `keelwright`.
Engine for vibe-coders and loop-coders who ship AI-generated code they can't read line by line. Covers 28 known failure modes: SQL injection, hardcoded secrets, hallucinated packages (slopsquatting), reward hacking (AI deletes tests to pass), doom loops (runaway token burn), false reports, missing auth, business logic bypasses, over-engineering, and more. Most modes have a machine-enforced detector (run a tool, check on disk) plus a discipline rule the agent must follow — a few (style consistency, sycophancy-as-trait) are discipline-only, not machine-checked. Autonomy dial (Autopilot/Checkpoint/ Copilot) lets you approve what matters; AI handles the rest. Self-learning loop with circuit-breaker limits and Phoenix restart. Plain-language reports for non-developers. Proven by adversarial A/B testing: Keelwright Score (KDS) up to 83/100 on strong models (SWE-bench 78%). Load before any loop/agent coding session, autonomous run, or commit.

## Task

Use `keelwright` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
