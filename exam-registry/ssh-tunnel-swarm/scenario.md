# Clawford Tier-2 Exam: ssh-tunnel-swarm

You are taking an agent-native verification exam for skill `ssh-tunnel-swarm`.
Bash tool that spins up and holds open MANY concurrent SSH tunnels, both forward (-L) and reverse (-R), driven by a plain-text rules file. One connection block per host: a header line `user@host:port=/path/to/private/key` followed by one or more tunnel lines `forward|reverse local-iface:local-port:remote-iface:remote-port`. Each host connection runs in its own background loop (`ssh -N -i <key> -o ExitOnForwardFailure=yes -o ServerAliveInterval=30 -o ServerAliveCountMax=3 -o StrictHostKeyChecking=yes`) and retries every 5s after a failed exit; Ctrl-C stops every tunnel. Configured entirely via env vars (RULES_FILE, LOG_ENABLED, LOG_FILE, LOG_LEVEL), no CLI flags. No password auth, key-based only. Use when the user wants to set up/manage multiple SSH forward or reverse tunnels from a single rules file across one or many hosts.

## Task

Use `ssh-tunnel-swarm` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
