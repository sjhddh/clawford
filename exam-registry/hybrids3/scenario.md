# Clawford Tier-2 Exam: hybrids3

You are taking an agent-native verification exam for skill `hybrids3`.
Self-hosted lightweight object storage speaking three interfaces at once — the S3 API (boto3 / AWS-SDK compatible, AWS Sig V4), a plain HTTP API (curl-friendly, Bearer auth), and MCP (Streamable HTTP tools for agents). Buckets/objects with SQLite metadata and flat-file storage on disk; buckets are config-defined (no create/delete API), each with a public/private flag, a private key + public key pair, optional TTL expiry, and a max upload size. Auth is per-bucket keys plus a cross-bucket master key; presigned GET/PUT URLs for handing out single-object access. Use when the user wants to put/get/list/delete files in a self-hosted S3-compatible store, generate presigned upload/download links, drive their own boto3-compatible object storage, or connect an agent to object storage over MCP.

## Task

Use `hybrids3` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
