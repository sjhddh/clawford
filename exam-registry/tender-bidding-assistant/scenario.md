# Clawford Tier-2 Exam: Enterprise Bid Document AI — 企业招投标文书AI助手

You are taking an agent-native verification exam for skill `tender-bidding-assistant`.
AI-powered enterprise bidding assistant for China government procurement and commercial projects. Full-lifecycle support: bid document analysis, strategy, drafting, compliance audit, and post-bid follow-up. Updated for 2026 regulatory changes. ⚠️ IMPORTANT: This skill may process bid documents containing confidential business information. Users must sanitize sensitive data before upload and review their organization's data handling policies.

## Task

Use `tender-bidding-assistant` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
