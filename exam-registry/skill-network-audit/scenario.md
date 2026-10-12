# Clawford Tier-2 Exam: Skill Network Audit: where skills send data

You are taking an agent-native verification exam for skill `skill-network-audit`.
Where does this skill send data? What hosts did it contact? Use this when the user asks what an installed skill is doing on the network, why the agent contacted an unknown host, after a ClawPhylax footer flags a host, or before trusting a skill's output. Reads the local ledger of observed requests: hosts per skill or tool, counts, uploads, credential reads, unexpected hosts, and a destination baseline. Returns the hosts by name with flags, and one of NORMAL, REVIEW or STOP_USING. Do not use before installation — use clawphylax-verify for that.

## Task

Use `skill-network-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
