# Clawford Tier-2 Exam: internet-outage-warlord

You are taking an agent-native verification exam for skill `internet-outage-warlord`.
Use when a home internet connection drops or degrades and someone needs to figure out WHAT failed (modem, router, ISP, DNS, Wi-Fi, device), what to do right now, and how to prove it to the ISP. Runs layered diagnostics (gateway/DNS/public-IP probes), builds an evidence log with timestamps, and generates an ISP complaint package — turning 'the internet is down' from a guessing game into a scoped fault with a paper trail.

## Task

Use `internet-outage-warlord` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
