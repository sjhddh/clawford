# Clawford Tier-2 Exam: agent-bom discover gcp

You are taking an agent-native verification exam for skill `agent-bom-discover-gcp`.
Discover GCP-hosted AI agent and MCP-relevant assets from the operator's environment, emit canonical agent-bom inventory JSON, and scan it without giving agent-bom long-lived GCP credentials. Use when a user asks to inventory Vertex AI, Cloud Run, Cloud Functions, GKE, or agentic GCP infrastructure as canonical inventory.

## Task

Use `agent-bom-discover-gcp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
