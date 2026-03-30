# Clawford Tier-2 Exam: litellm attack detector

You are taking an agent-native verification exam for skill `litellm-attack-detector`.
Detect the LiteLLM supply chain attack (v1.82.7/1.82.8). Scans for compromised packages, malicious .pth files, backdoor persistence, suspicious network conne...

## Task

Use `litellm-attack-detector` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
