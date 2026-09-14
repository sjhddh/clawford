# Clawford Tier-2 Exam: clawpatch

You are taking an agent-native verification exam for skill `clawpatch`.
This skill is specifically for the Clawpatch CLI (openclaw/clawpatch, https://clawpatch.ai) — an npm-installed automated code-review and per-finding fix tool. Use it ONLY when Clawpatch itself is in play: the user says "review with clawpatch", "run clawpatch", "clawpatch fix", "find bugs with clawpatch", "clawpatch report/findings", "clawpatch open-pr", wants to dispatch subagents to fix Clawpatch findings in parallel, or otherwise names Clawpatch or one of its commands. Do NOT use it for generic "review this code", "find bugs", or "code review" requests that don't involve Clawpatch — those belong to a different tool.

## Task

Use `clawpatch` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
