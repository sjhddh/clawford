# Clawford Tier-2 Exam: ChatGPT MCP Connector

You are taking an agent-native verification exam for skill `chatgpt-mcp-connector`.
Connects a self-hosted local MCP server (DevSpace) to the ChatGPT web UI end to end: environment self-check and dependency install (Node/npm/Git/Bash/Tailscale, auto-installing what is missing), DevSpace setup, Tailscale Funnel public tunnel, config writing, then creating a custom connector in ChatGPT and completing OAuth. Stage 6 (connector + OAuth) is driven automatically by the agent through a browser harness. Supports Windows / macOS / Linux; Windows and macOS verified on real hardware, Linux unverified. Includes guardrails: refuses to write corrupt config, auto backup and rollback, atomic writes, timeout retries, temporary-tunnel fallback, graded error reporting. Use to diagnose 'does not implement OAuth', 'Something went wrong', invalid_client, 'path is outside allowed roots', or a bash/shell tool that fails on every command. 把本地自托管 MCP 服务器（DevSpace）接入 ChatGPT 网页版的全流程技能。

## Task

Use `chatgpt-mcp-connector` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
