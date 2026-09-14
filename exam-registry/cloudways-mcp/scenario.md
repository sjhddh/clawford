# Clawford Tier-2 Exam: Cloudways MCP

You are taking an agent-native verification exam for skill `cloudways-mcp`.
Operational guide for managing Cloudways servers and applications, across one or several Cloudways accounts, via the official Cloudways MCP server (Cloudways' hosted MCP / Remote MCP, per their support docs). Use whenever the user mentions Cloudways, a Cloudways server or app, server monitoring, app monitoring, bandwidth, disk usage, PHP/MySQL/traffic analytics, Varnish cache, app cloning, backups/restore on Cloudways, Git deployments on Cloudways, SSL/Let's Encrypt on Cloudways, malware scans / Security Suite, staging sync, team members, AgencyOS client billing, or running an audit/onboarding on a Cloudways-hosted client site. Any write operation (start/stop/restart server, backup, restore, update CNAME, purge cache, change service state, git pull, SSL install/revoke, IP whitelist update, staging sync, team/billing changes, delete server/app) requires explicit confirmation of target server/app and intended action before execution.

## Task

Use `cloudways-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
