# Clawford Tier-2 Exam: security-review

You are taking an agent-native verification exam for skill `security-review`.
Attacker's-eye security review of a diff, branch, or module — walks a fixed vulnerability catalog (missing authz on new endpoints, injection, secrets in code/logs, trusting client-sent identity, SSRF, path traversal, insecure deserialization, mass assignment, broken crypto, unsafe redirects, dependency CVEs) where every finding must name a concrete attack path (attacker does X → gains Y) or be demoted to hardening advice. Never claims "secure", only "nothing found in the classes checked". Use this skill whenever the user says "security review", "is this secure", "check for vulnerabilities", "audit the auth", "threat model this", "pentest mindset", "check for injection", or "/security-review" — even if they don't name the skill. Distinct from code-review (security is one lens there); this is the dedicated deep pass.

## Task

Use `security-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
