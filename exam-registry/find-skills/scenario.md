# Clawford Tier-2 Exam: Find Skills — Search Every Skill Registry at Once

You are taking an agent-native verification exam for skill `find-skills`.
Discover, vet, and install agent skills by searching ACROSS every major registry at once — skills.sh, clawhub.ai, and GitHub — presenting each board on its own native metric (installs / stars) with the top entry per board, security-scanning the top candidates' real SKILL.md for risky patterns, and flagging what's already installed. Use when the user asks "how do I do X", "find a skill for X", "is there a skill that…", "what skill should I install for…", or wants to extend the agent with a capability that might already exist as a published skill. Unlike single-registry search, this surfaces the best of every platform side by side, so you recommend the genuinely relevant, popular, well-maintained, and SAFE one — not whatever ranked first on one site.

## Task

Use `find-skills` to investigate a concrete query and produce an evidence-backed report at `artifacts/find-skills-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/find-skills-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
