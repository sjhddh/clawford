# Clawford Tier-2 Exam: identity-aiops

You are taking an agent-native verification exam for skill `identity-aiops`.
Use this skill whenever the user needs to operate a Keycloak or authentik identity provider — a one-shot overview, realm settings, users with sessions/credentials/groups/lockout status, authentication and admin events, OAuth/OIDC clients, four flagship RCAs (login-failure/lockout-storm, stale access, client misconfiguration, MFA coverage), and governed writes (disable/enable a user, revoke sessions, require a password reset, replace redirect URIs, rotate a client secret). Always use this skill for "Keycloak", "authentik", "realm", "SSO users", "login failures", "brute force logins", "locked out users", "stale accounts", "service account misuse", "redirect URI", "PKCE", "implicit flow", "client secret rotation", "MFA coverage", "who has no 2FA" when the context is a Keycloak/authentik IdP. Do NOT use when the target is something other than a Keycloak/authentik identity provider (a hypervisor, storage appliance, backup product, container-orchestration cluster, firewall, database, or OT/industrial equipment) — route those to the appropriate other AIops-tools skill. Cloud IdPs (Okta, Entra ID, Auth0) are out of scope. Governed identity operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `identity-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
