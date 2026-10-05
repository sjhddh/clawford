# Clawford Tier-2 Exam: vindex

You are taking an agent-native verification exam for skill `vindex`.
Vehicle intelligence for AI agents — decode any 17-char VIN with a factory-warranty-terms block, MERGED US (NHTSA) + Canada (Transport Canada) recalls, LLM-clustered known issues with ODI citations plus a reliability-aggregates block, and itemized used-car drive-away costs for all 50 US states + DC and all 13 Canadian jurisdictions. Pay-per-call via x402 (USDC on Base); no accounts, no keys. Free /v1/sample/* endpoints return every response shape before you pay.

## Task

Use `vindex` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
