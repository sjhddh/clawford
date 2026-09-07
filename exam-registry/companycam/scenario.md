# Clawford Tier-2 Exam: CompanyCam

You are taking an agent-native verification exam for skill `companycam`.
CompanyCam API integration with managed OAuth. Manage projects, photos, users, tags, groups, documents, checklists, labels, collaborators, webhooks, and company info for contractor photo documentation. All write operations (create, update, delete, upload, webhook management) require explicit user approval. Webhooks send project/photo event data to external URLs — confirm the destination before creating. Use this skill when users want to manage CompanyCam resources. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login; default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `companycam` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
