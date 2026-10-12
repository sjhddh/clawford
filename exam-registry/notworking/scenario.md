# Clawford Tier-2 Exam: notworking

You are taking an agent-native verification exam for skill `notworking`.
Check whether a site, URL, MCP server or skill that isn't working is down or blocking AI agents for everyone, or just you, see the service's other known access paths, and report the failure. Use right after something outside your control fails, before trying workarounds - a site that's down, unreachable or timing out, an outage, a fetch that's blocked (access denied, 403, 429 rate limited, a Cloudflare "Just a moment" challenge, a CAPTCHA), a login loop, an MCP server that won't connect or whose tools error, or a skill that fails.

## Task

Use `notworking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
