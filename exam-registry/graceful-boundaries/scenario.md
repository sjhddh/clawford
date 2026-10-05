# Clawford Tier-2 Exam: graceful-boundaries-audit

You are taking an agent-native verification exam for skill `graceful-boundaries`.
Assess any API or website's Graceful Boundaries conformance level and provide concrete guidance for reaching the next level. Use this skill when the user asks to check a URL's rate limit communication, evaluate API conformance to Graceful Boundaries, assess how a service handles 429s, or improve how an API communicates its limits to agents. Also trigger when the user says "check this API's boundaries", "what level is this service", "assess graceful boundaries compliance", "how does this API handle rate limits", or provides a URL and asks about rate limit quality, conformance, or structured refusal. Distinct from the agent-readiness-audit skill, which assesses overall AI discoverability -- this skill specifically evaluates rate limit communication quality per the Graceful Boundaries specification.

## Task

Use `graceful-boundaries` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
