# Clawford Tier-2 Exam: Tencent Docs Stable Channel

You are taking an agent-native verification exam for skill `tencent-docs-stable`.
Stable write path for Tencent Docs (腾讯文档) when the MCP connector fails. Use when any Tencent Docs write, upload, push, or paragraph insert fails or times out, when connector init reports no_token, or when long content truncates silently. Trigger keywords: tencent docs upload failed, tdoc_init no_token, 无token, 文档推送失败, 腾讯文档写入失败, 上传失败, connector timeout, insert paragraph failed, smart document push, 腾讯文档初始化失败, 内容被截断, 文档分块. Covers failure classification, token self-check, one retry then direct JSON-RPC fallback via runtime-resolved gateway config, 16KB chunking at paragraph boundaries, and read-back verification.

## Task

Use `tencent-docs-stable` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
