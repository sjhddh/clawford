# Clawford Tier-2 Exam: zoho-projects

You are taking an agent-native verification exam for skill `zoho-projects`.
Zoho Projects API V3 integration with managed OAuth. Manage projects, tasks, milestones, tasklists, and team collaboration. Use this skill when users want to manage project tasks, track time, organize milestones, or collaborate on projects. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Security: The MATON_API_KEY authenticates with Maton.ai but grants NO access to Zoho Projects by itself. Zoho access requires explicit OAuth authorization by the user through Maton's connect flow. Access is strictly scoped to the Zoho Projects account the user has authorized. Requires network access and valid Maton API key. Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `zoho-projects` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
