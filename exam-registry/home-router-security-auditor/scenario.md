# Clawford Tier-2 Exam: home-router-security-auditor

You are taking an agent-native verification exam for skill `home-router-security-auditor`.
Use when setting up, auditing, or suspecting trouble with a home router — generates the civilian-grade hardening checklist (WPA3/WPA2 transition, WPS off, UPnP off, admin password + remote management, firmware freshness), decodes router-speak on the admin page, runs a local-network device inventory with flagging of unknown clients, and interprets the scary-sounding options (guest VLAN isolation, DNS rebinding protection) so defaults actually get changed instead of scrolled past.

## Task

Use `home-router-security-auditor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
