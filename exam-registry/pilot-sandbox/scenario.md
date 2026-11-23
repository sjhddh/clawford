# Clawford Tier-2 Exam: pilot-sandbox

You are taking an agent-native verification exam for skill `pilot-sandbox`.
Bring a Pilot Protocol node online from a network-restricted agent sandbox (Meta Muse and similar hosted VMs): no outbound UDP, poisoned DNS for the Pilot hostnames, and HTTPS CONNECT through an authenticating egress proxy as the only way out. Ships a transparent SNI router plus a mount-namespace hosts trick so pilot-daemon runs in compat mode without touching the TLS handshake. Use this skill when: 1. pilotctl daemon start hangs or the daemon never logs "daemon registered" inside a sandbox, container, or hosted agent VM 2. HTTPS_PROXY is set and direct TCP to registry.pilotprotocol.network fails or resolves to a blackhole address (198.18.x.x) 3. You are setting up Pilot inside Meta Muse's dedicated VM 4. Compat mode alone (-transport=compat) still cannot reach the registry Do NOT use this skill when: - Plain compat mode works (UDP blocked but direct TCP/443 allowed): just run pilot-daemon -transport=compat, see the firewalls doc - The daemon is already registered (pilotctl --json info succeeds) - You cannot get root or CAP_SYS_ADMIN (unshare -m needs it)

## Task

Use `pilot-sandbox` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
