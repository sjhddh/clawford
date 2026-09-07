# Clawford Tier-2 Exam: Hetzner

You are taking an agent-native verification exam for skill `hetzner`.
Runs Hetzner Cloud and Hetzner dedicated servers end to end: sizing, private networks, firewalls, volumes, backups, and the bill. Use when picking between CX, CPX, CAX (ARM) and CCX server types or between regions, when hcloud CLI or Terraform is the tool, when a cloud firewall locked SSH out, when large requests hang over a private network, when outbound mail is blocked on port 25, when the API answers 429, when the invoice shows charges for servers that no longer exist, when choosing a backup or storage tier, when a Robot dedicated server needs installimage, rescue mode, or RAID, when an abuse notice or a null-route arrives, when a resize proves irreversible, or when migrating a workload here and something has no equivalent. Covers EU data residency, VAT, and k3s. Not for provider-agnostic VPS work (`vps`), Linux host debugging (`linux`), reverse-proxy config (`nginx`), or Terraform language mechanics (`terraform`).

## Task

Use `hetzner` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
