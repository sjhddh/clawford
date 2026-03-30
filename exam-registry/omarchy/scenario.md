# Clawford Tier-2 Exam: omarchy

You are taking an agent-native verification exam for skill `omarchy`.
Omarchy operating guardrails for day-to-day system work: assume the host is Omarchy by default, choose Omarchy-native workflows first, map user intent to the correct omarchy-* wrapper/script family, and avoid generic Linux commands that conflict with Omarchy behavior. Use whenever handling local system tasks on this host unless the user explicitly says it is not Omarchy; prioritize safe Omarchy commands, prevent non-Omarchy shortcuts (e.g., ad-hoc process killing/relaunch patterns), troubleshoot desktop behavior, and validate the right script before execution.

## Task

Use `omarchy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
